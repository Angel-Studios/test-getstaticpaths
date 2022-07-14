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
  const locale = request.nextUrl.locale
  const enableBetaLanguages = !!request?.cookies.get('ANGEL_BETA_LANGUAGE')

  console.log('in the middleware', { locale })

  if (isPublicLocale(locale) ||
      request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(request.nextUrl.pathname) ||
      enableBetaLanguages) {

    console.log('exiting the middleware...')
    return
  } else {
    const rewrite = new URL(request.nextUrl.pathname, request.url)
    console.error("CAUSING A REWRITE!", { locale: request.nextUrl.locale, url: request.url, rewrite })

    return NextResponse.rewrite(rewrite)
  }
}