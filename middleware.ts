import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import locales from '@/constants/locales'

function isPublicLocale(locale: string) {
  console.log('isPublicLocale', { locale })

  return !!locales.public.find((publicLocale) => publicLocale === locale)
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("url", { url: request.url })

  const enableBetaLanguages = !!request?.cookies.get('ANGEL_BETA_LANGUAGE')

  if (!enableBetaLanguages && !isPublicLocale(request.nextUrl.locale)) {
    return NextResponse.rewrite(new URL(request.nextUrl.pathname, request.url))
  }

  return undefined
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    ...locales.beta.map((locale) => `/${locale}/:path*`),
    ...locales.alpha.map((locale) => `/${locale}/:path*`),
  ],
}
