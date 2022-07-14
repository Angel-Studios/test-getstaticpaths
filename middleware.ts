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

export function middleware(request: NextRequest) {
  console.log('in the middleware')

  const enableBetaLanguages = !!request?.cookies.get('ANGEL_BETA_LANGUAGE')
  const validRequestedLocale = enableBetaLanguages || isPublicLocale(request.nextUrl.locale)

  if ( request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(request.nextUrl.pathname) ||
      validRequestedLocale ) {

    console.log('exiting the middleware...')

    return

  } else {
    const rewrite = new URL(request.nextUrl.pathname, request.url)
    console.error("CAUSING A REWRITE!", { locale: request.nextUrl.locale, url: request.url, rewrite })

    return NextResponse.rewrite(rewrite)
  }
}

export const config = {
  matcher: [ '/pt/static-paths/:path*',
    '/es/static-paths/:path*',
    '/de/static-paths/:path*',
    '/fr/static-paths/:path*',
    '/pt/empty-static-paths/:path*',
    '/es/empty-static-paths/:path*',
    '/de/empty-static-paths/:path*',
    '/fr/empty-static-paths/:path*' ],
}