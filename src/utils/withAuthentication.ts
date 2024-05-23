// // utils/withAuthentication.ts
// import { GetServerSidePropsContext } from 'next';
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// export default function withAuthentication(searchPage) {
//   return async function EnhancedPage(props) {
//     const { isAuthenticated } = await getKindeServerSession(props.context.req);

//     if (!isAuthenticated) {
//       return <Redirect to="/login" />;
//     }

//     return <searchPage {...props} />;
//   };
// }
