import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TestNavigator } from '../../../src/components/TestNavigator'

interface TestProps {
  myId: string
}

export const Test: NextPage<TestProps> = ({ myId }) => {
  return (
    <>
      <TestNavigator basePath="/test" />
      <div className="my-12 mx-12 bg-red">
        <h1>EMPTY STATIC PATHS</h1>
        {myId}
      </div>
    </>
  )
}

export default Test

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  return {
    props: {
      myId: params?.guid as string,
    },
  }
}
