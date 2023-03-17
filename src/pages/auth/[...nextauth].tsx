import NextAuth, { NextAuthOptions} from 'next-auth';
import CredentialsProvidor from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {};
            authorize(credentials, req){
                return {}
            }
        })
    ]
}

export default NextAuth(authOptions);