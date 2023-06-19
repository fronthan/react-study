
import { Suspense } from "react";
import Loading from "../loading";


export default function DashboardLayout({children}) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Suspense fallback={<Loading/>}>
            <nav></nav>
            {children}
        </Suspense>
      </section>
    );
  }