import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TestNavigator } from '@/components/TestNavigator'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

interface TestProps {
  myId: string
}

export const Test: NextPage<TestProps> = ({ myId }) => {
  const { t } = useTranslation()

  return (
    <>
      <TestNavigator />
      <div style={{ margin: "1.5rem", textAlign: "center", width: "100%" }}>
        <h1>{t('withStaticPaths', "With Static Paths")}: {myId}</h1>
      </div>
    </>
  )
}

export default Test

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { guid: '1' } },
      { params: { guid: '2' } },
      { params: { guid: '3' } },
      { params: { guid: '4' } },
      { params: { guid: '5' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  return {
    props: {
      myId: params?.guid as string,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}
