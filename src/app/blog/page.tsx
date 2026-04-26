export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Cleaning tips, property care guides, and vacation rental insights from Forteca Cleaning.",
};

interface BlogImage {
  url: string;
  path: string;
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  images: BlogImage[] | null;
  cover_image: string | null;
  author: string | null;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getThumbnail(post: BlogPost): string | null {
  if (post.images && post.images.length > 0) return post.images[0].url;
  if (post.cover_image) return post.cover_image;
  return null;
}

export default async function BlogPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: posts } = await supabase
    .from("blog_posts")
    .select(
      "id, slug, title, excerpt, status, published_at, created_at, images, cover_image, author"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const blogPosts = (posts ?? []) as BlogPost[];
  const [featured, ...rest] = blogPosts;
  const featuredThumb = featured ? getThumbnail(featured) : null;

  return (
    <>
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="grain"
        style={{ background: "var(--ink)", padding: "96px 0 80px" }}
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow on-dark" style={{ marginBottom: 20 }}>
            From the Forteca Blog
          </p>
          <h1
            className="h-display h2"
            style={{ color: "var(--cream)", marginBottom: 20 }}
          >
            Cleaning Tips &amp; Property Guides
          </h1>
          <p
            style={{
              color: "rgba(243,236,223,0.5)",
              fontSize: 17,
              maxWidth: "52ch",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Expert advice for vacation rental owners, homeowners, and property
            managers across the Pocono Mountains.
          </p>
        </div>
      </section>

      {/* ── Posts ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--paper)", padding: "80px 0 100px" }}>
        <div className="wrap">
          {blogPosts.length === 0 ? (
            /* Empty state */
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  margin: "0 auto 24px",
                  borderRadius: "50%",
                  background: "var(--paper-2)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--slate-2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
              </div>
              <h2
                className="h-display"
                style={{ fontSize: 28, color: "var(--ink)", marginBottom: 12 }}
              >
                Coming Soon
              </h2>
              <p style={{ color: "var(--slate)", fontSize: 15 }}>
                We&apos;re working on great content. Check back soon!
              </p>
            </div>
          ) : (
            <>
              {/* ── Featured post ─────────────────────────────── */}
              <Link
                href={`/blog/${featured.slug}`}
                className="featured-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  minHeight: 380,
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 4,
                  overflow: "hidden",
                  marginBottom: 64,
                  textDecoration: "none",
                  transition: "box-shadow 0.25s",
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    backgroundImage: featuredThumb
                      ? `url(${featuredThumb})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    background: featuredThumb ? undefined : "var(--ink-3)",
                    minHeight: 300,
                    position: "relative",
                  }}
                >
                  {!featuredThumb && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        color: "var(--slate-2)",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      Forteca Cleaning
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "48px 44px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 16,
                  }}
                >
                  <p className="eyebrow" style={{ color: "var(--gold-deep)" }}>
                    Featured
                  </p>
                  <h2
                    className="h-display h3"
                    style={{ color: "var(--ink)", lineHeight: 1.15 }}
                  >
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p
                      style={{
                        color: "var(--slate)",
                        fontSize: 15,
                        lineHeight: 1.65,
                      }}
                    >
                      {featured.excerpt}
                    </p>
                  )}
                  <p
                    style={{
                      color: "var(--slate-2)",
                      fontSize: 12,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {formatDate(featured.published_at ?? featured.created_at)}
                  </p>
                  <span
                    className="featured-arrow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 4,
                      color: "var(--gold)",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      transition: "transform 0.2s",
                    }}
                  >
                    Read Article →
                  </span>
                </div>
              </Link>

              {/* ── Grid of remaining posts ────────────────────── */}
              {rest.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 28,
                  }}
                >
                  {rest.map((post) => {
                    const thumb = getThumbnail(post);
                    return (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="post-card"
                        style={{
                          display: "block",
                          background: "var(--paper)",
                          border: "1px solid var(--line)",
                          borderRadius: 4,
                          overflow: "hidden",
                          textDecoration: "none",
                          transition: "box-shadow 0.25s, transform 0.25s",
                        }}
                      >
                        <div
                          style={{
                            height: 200,
                            backgroundImage: thumb ? `url(${thumb})` : undefined,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            background: thumb ? undefined : "var(--ink-3)",
                            position: "relative",
                          }}
                        />
                        <div style={{ padding: "24px 26px 28px" }}>
                          <p
                            style={{
                              fontSize: 12,
                              color: "var(--slate-2)",
                              letterSpacing: "0.02em",
                              marginBottom: 10,
                            }}
                          >
                            {formatDate(post.published_at ?? post.created_at)}
                          </p>
                          <h3
                            className="h-display"
                            style={{
                              fontSize: 21,
                              color: "var(--ink)",
                              marginBottom: 10,
                              lineHeight: 1.2,
                            }}
                          >
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p
                              style={{
                                color: "var(--slate)",
                                fontSize: 14,
                                lineHeight: 1.6,
                                marginBottom: 16,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {post.excerpt}
                            </p>
                          )}
                          <span
                            className="card-arrow"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              color: "var(--gold)",
                              fontSize: 13,
                              fontWeight: 600,
                              letterSpacing: "0.04em",
                              transition: "transform 0.2s",
                            }}
                          >
                            Read More →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style>{`
        .featured-card:hover {
          box-shadow: 0 16px 48px rgba(14,22,34,0.12);
        }
        .featured-card:hover .featured-arrow {
          transform: translateX(5px);
        }
        .post-card:hover {
          box-shadow: 0 8px 28px rgba(14,22,34,0.10);
          transform: translateY(-3px);
        }
        .post-card:hover .card-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 720px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
