import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import App from "./App";
import "./styles.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ClerkApp() {
  const { user } = useUser();
  const userName = user?.firstName || user?.username || "Usuário";

  return (
    <>
      <SignedOut>
        <App
          authStatus="signedOut"
          authLabel="Clerk SSO"
          signInControl={
            <SignInButton mode="modal">
              <button className="primary-button" type="button">
                Entrar com Clerk SSO
              </button>
            </SignInButton>
          }
        />
      </SignedOut>
      <SignedIn>
        <App authLabel="Clerk SSO" userControl={<UserButton />} userName={userName} />
      </SignedIn>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ClerkApp />
      </ClerkProvider>
    ) : (
      <App
        authLabel="Demonstração local sem Clerk"
        userControl={<span className="demo-user-badge">Demo</span>}
        userName="Aluno Demo"
      />
    )}
  </React.StrictMode>
);
