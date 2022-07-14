import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import locales from '@/constants/locales'

function isPublicLocale(locale: string) {
  const isPublicLocale = !!locales.public.find((publicLocale) => publicLocale === locale)

  if (!isPublicLocale) {
    console.log('isPublicLocale', { locale, isPublicLocale })
  }

  return isPublicLocale
}

const PUBLIC_FILE = /\.(.*)$/

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
      request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return
  }

  const enableBetaLanguages = !!request?.cookies.get('ANGEL_BETA_LANGUAGE')

  if (!enableBetaLanguages && !isPublicLocale(request.nextUrl.locale)) {
    const rewrite = new URL(request.nextUrl.pathname, request.url)
    console.log("CAUSING A REWRITE!", { rewrite })

    return NextResponse.rewrite(rewrite)
  }

  return
}