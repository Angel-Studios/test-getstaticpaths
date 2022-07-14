import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TestNavigator } from '@/components/TestNavigator'

interface TestProps {
  myId: string
}

export const Test: NextPage<TestProps> = ({ myId }) => {
  return (
    <>
      <TestNavigator basePath="/test" />
      <div style={{ margin: "1.5rem", textAlign: "center", width: "100%" }}>
        <h1>With Static Paths: {myId}</h1>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      myId: params?.guid as string,
    },
  }
}
