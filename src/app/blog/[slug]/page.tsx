export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface BlogImage {
  url: string;
  path: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function generateStaticParams() {
  try {
    const { data } = await getSupabase()
      .from("blog_posts")
      .select("slug")
      .eq("status", "published");
    return (data ?? []).map((p: { slug: string }) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await getSupabase()
    .from("blog_posts")
    .select("title, excerpt, images, cover_image")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!post) return {};
  const images = (post.images as BlogImage[] | null) ?? [];
  const heroImage = images[0]?.url ?? post.cover_image ?? undefined;

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: heroImage ? { images: [{ url: heroImage }] } : undefined,
    alternates: { canonical: `/blog/${slug}` },
  };
}

function parseContent(content: string): React.ReactNode[] {
  const blocks = content
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/)
    .filter(Boolean);

  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(20px, 2.2vw, 26px)",
            fontWeight: 600,
            color: "var(--ink)",
            margin: "40px 0 12px",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {block.slice(3)}
        </h2>
      );
    }

    if (block.startsWith("### ")) {
      return (
        <h3
          key={i}
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(17px, 1.8vw, 21px)",
            fontWeight: 600,
            color: "var(--ink)",
            margin: "32px 0 10px",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          {block.slice(4)}
        </h3>
      );
    }

    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} style={{ margin: "16px 0", padding: 0, listStyle: "none" }}>
          {items.map((item, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "5px 0",
                fontSize: 16,
                lineHeight: 1.65,
                color: "rgba(14,22,34,0.78)",
              }}
            >
              <span
                style={{
                  marginTop: 9,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  flexShrink: 0,
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: item
                    .slice(2)
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p
        key={i}
        style={{
          color: "rgba(14,22,34,0.75)",
          fontSize: 16,
          lineHeight: 1.78,
          margin: "16px 0",
        }}
        dangerouslySetInnerHTML={{
          __html: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await getSupabase()
    .from("blog_posts")
    .select(
      "id, title, slug, excerpt, content, published_at, created_at, images, cover_image, author"
    )
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!post) notFound();

  const images = (post.images as BlogImage[] | null) ?? [];
  const heroImage = images[0]?.url ?? post.cover_image ?? null;
  const galleryImages = images.length > 1 ? images.slice(1) : [];

  return (
    <>
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div
        className="grain"
        style={{
          background: "var(--ink)",
          position: "relative",
          padding: "84px 0 76px",
          overflow: "hidden",
        }}
      >
        {heroImage && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.3)",
              zIndex: 0,
            }}
          />
        )}
        <div
          className="wrap"
          style={{ position: "relative", zIndex: 1, maxWidth: 800 }}
        >
          <Link
            href="/blog"
            className="back-hero-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "rgba(243,236,223,0.55)",
              fontSize: 13,
              letterSpacing: "0.02em",
              marginBottom: 32,
              transition: "color 0.2s",
            }}
          >
            ← All Posts
          </Link>

          <p className="eyebrow on-dark" style={{ marginBottom: 20 }}>
            Forteca Cleaning
          </p>

          <h1
            className="h-display h2"
            style={{ color: "var(--cream)", marginBottom: 32 }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "rgba(243,236,223,0.5)",
              fontSize: 14,
            }}
          >
            <span>{post.author ?? "Forteca Cleaning"}</span>
            <span style={{ color: "rgba(243,236,223,0.2)" }}>·</span>
            <span>{formatDate(post.published_at ?? post.created_at)}</span>
          </div>
        </div>
      </div>

      {/* ── Gallery strip ──────────────────────────────────────── */}
      {galleryImages.length > 0 && (
        <div
          style={{
            background: "var(--ink-2)",
            padding: "20px 0",
            borderBottom: "1px solid var(--line-on-dark)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              overflowX: "auto",
              padding: "0 32px",
              scrollbarWidth: "none",
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={img.path ?? i}
                style={{
                  flexShrink: 0,
                  width: 210,
                  height: 136,
                  borderRadius: 3,
                  backgroundImage: `url(${img.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Content ────────────────────────────────────────────── */}
      <div style={{ background: "var(--cream)", padding: "80px 0 100px" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <article
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: 4,
              padding: "52px 56px",
            }}
          >
            {post.excerpt && (
              <blockquote
                style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: 22,
                  margin: "0 0 40px",
                  color: "var(--slate)",
                  fontFamily: "var(--font-display), serif",
                  fontSize: 18,
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                {post.excerpt}
              </blockquote>
            )}

            <div>{parseContent(post.content)}</div>
          </article>

          <div style={{ textAlign: "center", marginTop: 52 }}>
            <Link href="/blog" className="btn-gold">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .back-hero-link:hover { color: rgba(243,236,223,1) !important; }
        @media (max-width: 640px) {
          article { padding: 32px 24px !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}
