-- Create news_items table
CREATE TABLE public.news_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is super admin
CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT auth.email() = 'j.ferjani@evamanaging.com'
$$;

-- RLS Policies for news_items (admin only for CRUD)
CREATE POLICY "Super admin can select news"
ON public.news_items
FOR SELECT
TO authenticated
USING (public.is_super_admin());

CREATE POLICY "Super admin can insert news"
ON public.news_items
FOR INSERT
TO authenticated
WITH CHECK (public.is_super_admin());

CREATE POLICY "Super admin can update news"
ON public.news_items
FOR UPDATE
TO authenticated
USING (public.is_super_admin());

CREATE POLICY "Super admin can delete news"
ON public.news_items
FOR DELETE
TO authenticated
USING (public.is_super_admin());

-- Public read policy for anonymous users (published news only)
CREATE POLICY "Anyone can read published news"
ON public.news_items
FOR SELECT
TO anon
USING (published_at IS NOT NULL AND published_at <= now());

-- Also allow authenticated users to read published news
CREATE POLICY "Authenticated can read published news"
ON public.news_items
FOR SELECT
TO authenticated
USING (published_at IS NOT NULL AND published_at <= now());

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_news_items_updated_at
BEFORE UPDATE ON public.news_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();