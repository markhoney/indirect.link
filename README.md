# Weak Link

This site is an attempt to solve the problem of sharing URL links to misinformation on Facebook and other social media sites.

We've seen a problem recently with skeptical Facebook groups being warned that members are sharing misinformation. To help guard against this, this website can act as a proxy, allowing people to share links to websites indirectly, through the use of a prefix URL that can be prepended to an existing URL.

## Modes

There are two modes to the URLs. A simple mode, that can be used manually, and a mode that fully obscures the original URL.

### URL obscuration

This simple mode allows people to manually edit a link by prepending it with this site's domain name and a forward slash - `weak.link/`.

So for example, if we wanted to share a link to `https://misinformation.com/bad-page` safely, we could add `weak.link/` to the beginning of the URL, giving us `weak.link/https://misinformation.com/bad-page`.

Unfortunately Facebook still recognises some domain names using this trick, so the URL can be edited by adding one or more illegal characters into the domain name. Given that the valid characters for a URL path (see below for details) include an underscore (`_`), and the valid characters for a domain name do not include the underscore, this is the recommended character to use. For our `misinformation.com` domain name, we could edit the domain name to be `misinfo_rmation.com`. This appears to be sufficient to avoid Facebook's URL checking system. Our resulting URL for the example above would be `weak.link/https://misinfo_rmation.com/bad-page`.

### URL encoding

This second mode uses the full list of valid characters for both a full URL and URL path, which are 85 and 66 characters respectively. The site will encode a URL as a base85 value, then write that URL out as a base66 string. This will make the URL slightly longer (* 85/66 - about 1.3 times as long). Obviously this would be very hard to do manually, so the front page of the website has a simple box where you can paste your URL, and an encoded version will be shown below it.

As an example, our URL `https://misinformation.com/bad-page` will be converted to `B-2DXeLcBJFOpJJVNtKh9LecI3JOeWH8Xk1ReW`, and so the link we would use would be `weak.link/B-2DXeLcBJFOpJJVNtKh9LecI3JOeWH8Xk1ReW`.

### Link opening

When one of these links is opened, by default it will take the user to a page that displays a large clickable link to the original site. This page displays a clear warning that the site being linked to will contain misinformation and is only being shared for the purpose of skeptical critique.

#### Redirect

To add an automatic redirect to the URL, rather than having someone click the link, `r/` can be appended to the prefix. So instead of using `weak.link/`, you would use `weak.link/r/`. If a delay before redirecting is required, maybe because the user should be given time to read the warning, then the `r/` can be replaced by an integer number of seconds, for example `weak.link/5/`.

### Misuse

To prevent misuse of this site by people wanting to uncritically share misinformation on social media, a list of allowed referrers is used. If a referrer is not on the list when a link is clicked, the link will not be displayed or opened.

All links from this site to misinformation use a `noreferrer` attribute, to stop the misinformation site knowing where the link came from. They also use `nofollow` to ensure that page ranking is not conferred to the site, and finally they use `noopener` to prevent access to the window.opener variable (another form of referrer).

## Technology

### Petite Vue

[Petite Vue](https://github.com/vuejs/petite-vue) is a cut-down runtime for [Vue](https://vuejs.org/) optimised for direct frontend inclusion. This site uses Petite Vue to manage frontend updates, such as the URL obscuration and encoding/decoding, and page redirects.

## Local testing

This site is built to be hosted as a static site, on a service like GitHub Pages. As such, using a simple local server such as VS Code's Live Server should be sufficient to test the site. Just right click the index.html page in VS Code and click the `Open with Live Server` option.

## URL Encoding

### Character Sets

#### Domain Name

a-z 0-9 -

abcdefghijklmnopqrstuvwxyz0123456789-

=37 characters

#### URL

A-Z a-z 0-9 - . _ ~ : / ? # [ ] @ ! $ & ' ( ) * + , ; % =

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;%=

= 85 characters

#### URL Path

A-Z a-z 0-9 _ . \ -

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.\-

= 66 characters

#### Base64

A-Z a-z 0-9 + /

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/

= 64 characters

#### Base64 URL

A-Z a-z 0-9 - _

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_

= 64 characters

## Potential Domain name

### Possible TLDs

[https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains)

- [.click](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains)
- .direct
- .ink
- .link
- .new
- .now
- .online
- .page
- .safe
- .site
- .me
- [.to](https://en.wikipedia.org/wiki/Country_code_top-level_domain)
- .us
- .al

### Potential Names

- indirect.link
- skeptic.al
- suspicio.us
- go.to
- hop.to
- jump.to
- link.to
- indirectl.ink
- no.link
- not.link
- dont.link
- donot.link
- nope.link
- nope.to
- redirect.me
- send.me
- sendme.to
- no.direct
- nodirect.link
- skep.link
- nooo.link
- niet.link
- cull.link

### Registrars

[https://register.to/](https://register.to/)

## Words for domain name

### Two letter words

am, an, as, at, be, do, eh, go, hi, if, in, is, it, me, my, no, of

### Combinations of words

- nogo
- dono
- nota
- notmy
- dono
- gogo

## Short domain names

- nono.link - $59
- nil.link - $59
- nah.link - $59
- bye.link - $59
- bum.link - $59
- fail.link - $59
- gray/grey.link - $59
- none.link - $59
- okay.link - $59
- risky.link - $59
- weak.link = $59
