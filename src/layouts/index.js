import AuthGuard from "./Auth/AuthGuard";
import MainLayout from "./main";

export default function Layout({ children }) {
    return (
        <AuthGuard>
            <MainLayout>
                {children}
            </MainLayout>
        </AuthGuard>
    )
}
