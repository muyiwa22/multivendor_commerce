import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher(["/dashboard/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth(); // ✅ Await is crucial!

    // If user is not authenticated and trying to access protected route
    if (isProtectedRoute(req) && !userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    return NextResponse.next(); // ✅ Let the request through
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};