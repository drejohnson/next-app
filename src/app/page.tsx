"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSuspenseQuery } from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import Loading from "./loading"

function getBaseURL() {
  if (typeof window !== "undefined") {
    return ""
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "http://localhost:3000"
}

const baseUrl = getBaseURL()

function useWaitQuery({ wait }: { wait: number }) {
  const query = useSuspenseQuery({
    queryKey: ["wait", wait],
    queryFn: async () => {
      const path = `/api/wait?wait=${wait}`
      const url = baseUrl + path

      console.log("fetching", url)
      const res: string = await (
        await fetch(url, {
          cache: "no-store",
        })
      ).json()
      return res
    },
  })

  return [query.data as string, query] as const
}

function Wait({ wait }: { wait: number }) {
  const [data] = useWaitQuery({ wait })

  return <div>result: {data}</div>
}

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className=" max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>

      <Suspense fallback={<Loading />}>
        <Wait wait={100} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Wait wait={200} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Wait wait={300} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Wait wait={400} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Wait wait={500} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Wait wait={600} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Wait wait={700} />
      </Suspense>
    </section>
  )
}
