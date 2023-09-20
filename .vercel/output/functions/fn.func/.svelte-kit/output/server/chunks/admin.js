import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "linktree-clone-520ab";
const FB_CLIENT_EMAIL = "firebase-adminsdk-myrms@linktree-clone-520ab.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0rYKSQDcWmpKN\nPJggI0IQrz708GmbFR4T4XLrVXwmC/LXKeF7i+JPobyyzLhM5n7NXOrKJLd0YNeW\np1ckrJSefZF/PFZ8aJSJaFH3QKh+HRIS7MoJqkzOONAs9dqVq7KtlVzb5R/thoos\nOXjZ7kQfFGrvUnSCQ2wVUxMRuI7sILvF1cKvKXdrSLtmvYWdbNAoWOP6FxXdVmJ8\nOs1NDYAvBFRDvpzH7bJe0CsKRkmv84BP1Az58aDzAJeQepDuqETG3URbFHvOIwUu\nWhc7unSMnWj1r3tghAb72XbJ5zejgTXMRJ5DA54yxA5Pz744PyzqGHIR4TyqUM48\nhpTioXRPAgMBAAECggEAE/YRdWf7zhcAtvLpWa+bhm1eFsCS4kvYeVjQkfhtUWTD\njQr2+ufO9n5HczeT6wcSHk00MWYSEJz8ZIwTYB1jBAmacASyB2ekdXPdjmQJ2XkL\nvKSFg8DZYHU9ZqI45o1EHdJhIngzaVISZOVqmSUuSILAd7VT4uphABAgDLanr6WU\neDT8Sc3jcuCPsyl+Res0y2Yr+zh2lWEclrvH76KKISgzin1vYk5ilEfS6VQ/t75D\nOdV8Q/f6Ygzs0W/F1t9B8A6Xm75fYKXOgW3xzNGUor94UCN2zBN5lGVl5Axp16CD\nVKwffIObWYItoQ6Ff29ItJIisi6oCGTbx1MzIQHXNQKBgQDqCgkDsgDRuTu5lGkQ\nNa5AxV3cx7uEgyTippoB7qhEDS4NvwgArHaW394rJ3KP4eMifF8LS29xIWphQ666\n2Ur+3sk2ebct5CBQCzc7g8W7J4zbND1D76+udUX95Wjf7PaplsTqm6YwdFl3zoin\nSivrF1bYNcM7On2tqnB3OGbDEwKBgQDFoae1yTImNScrF7XnZfWn66KkAeK5wL0N\no01vX6bG3WR5FuDvqgyZd0I3kUDn0mna97CvZADf///KsmPy10rS2EXZJtLFykoE\nPU1HNhPSbvFwDV1kzUuUp35xSvJH8UqbTLrUh9dX46njoJSpAfQRTSYlXbRjO0nd\n1BSUWZl1VQKBgQDdVyJRYV6O+k125No8X1hun3p23FsHJvSSepf6rdhri797dqi9\n4l3BsPWwAH3DgBHNQqysxOofp0ext04gHnNj+hV4NMK+XxsEOKdC3Qv7RZtckNpE\nTwHqz7SjO/zkknpxx0pyy0PwXYlj2mu5M1e33fnfP3FlqZrEzQXSawAdCwKBgDQ4\ne90v9Z1c7CWZ1Un4igm93LLjgKo+gHXrEZn9N09SzqqkXflWAJBIj+mo6vKWibv/\nOOOPVB/cQBWqP3i6ZJ4D4aj4djcnNZmbLSFE68Xt5MQL9AKfsHnuLB35hL13x5Pz\nmWZxInipwolQNBfYWUp9DThQY0rZLrJ7yJhOeJslAoGBAMp2co8DSIez13kbVw3+\n+xlGp2YSQH2FvCE45pdWrQDBZoyWFDP5tqwQ4UL++ClHwOPe+/rUq1EGNvb/1X+r\ns4rnfyURSmuoMoFOoSlbj4kT8JqXvHgCU6gQgtz2xu9coXnyiYBr0hUq2ks//BrN\n5FZ2NRaOcjtuOHJNICz/xe47\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
