-- Fix RLS policies: Remove duplicate and conflicting policies, create proper PERMISSIVE policies

-- Drop existing problematic SELECT policies
DROP POLICY IF EXISTS "Anyone can read published news" ON public.news_items;
DROP POLICY IF EXISTS "Authenticated can read published news" ON public.news_items;
DROP POLICY IF EXISTS "Super admin can select news" ON public.news_items;

-- Create a single PERMISSIVE policy for public access to published news
CREATE POLICY "Public can read published news"
ON public.news_items
FOR SELECT
TO public
USING (published_at IS NOT NULL AND published_at <= now());

-- Create a PERMISSIVE policy for super admin to read ALL news (including drafts)
CREATE POLICY "Super admin can read all news"
ON public.news_items
FOR SELECT
TO authenticated
USING (is_super_admin());