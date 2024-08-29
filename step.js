/**
 * ----------------------
 *      MAKE API SECURE
 * ----------------------
 * The person who should have
 * 
 * concept:
 * 1. assign two tokens for each person (access token, refresh token)
 * 2. access token contains : token contains: user identification (email, role, etc)
 * 3. refresh token is used to recreate and access token that was expired.
 * 4. if refresh is invalid then logout the user
 * 
 */

/***
 * install : npm install jsonwebtoken
 * action 2 category: 1. assign 2. verify
 * 
 */

/**
 * FOR SECURE API CALLS
 * 1. server side : install cookie parser and use it as middleware
 *      - https://expressjs.com/en/resources/middleware/cookie-parser.html
 * 2. req.cookies
 * 3. on the client site : make api call using axios withCredentials true for credentials include while using fetch
 * 
 */


