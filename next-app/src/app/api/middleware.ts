import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');
    const domain = "https://ggoulis.com";

    // Only allow requests from my domain
    if (origin !== domain && origin !== "http://localhost") {
        return new NextResponse('Forbidden', { status: 403 });
    }

    // Handle CORS preflight requests (OPTIONS method)
    if (request.method === 'OPTIONS') {
        return NextResponse.json(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': domain,
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    // Passes CORS domain check
    return NextResponse.next();
}

// Configuring which routes the middleware should run on
export const config = {
    matcher: '/api/:path*'
};
