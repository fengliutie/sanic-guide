(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{441:function(t,s,e){"use strict";e.r(s);var a=e(13),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-deployment"}},[t._v("#")]),t._v(" Nginx Deployment")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Although Sanic can be run directly on Internet, it may be useful to use a proxy\nserver such as Nginx in front of it. This is particularly useful for running\nmultiple virtual hosts on the same IP, serving NodeJS or other services beside\na single Sanic app, and it also allows for efficient serving of static files.\nSSL and HTTP/2 are also easily implemented on such proxy.")]),t._v(" "),e("p",[t._v("We are setting the Sanic app to serve only locally at "),e("code",[t._v("127.0.0.1:8000")]),t._v(", while the\nNginx installation is responsible for providing the service to public Internet\non domain "),e("code",[t._v("example.com")]),t._v(". Static files will be served from "),e("code",[t._v("/var/www/")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"proxied-sanic-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proxied-sanic-app"}},[t._v("#")]),t._v(" Proxied Sanic app")]),t._v(" "),e("p",[t._v("The app needs to be setup with a secret key used to identify a trusted proxy,\nso that real client IP and other information can be identified. This protects\nagainst anyone on the Internet sending fake headers to spoof their IP addresses\nand other details. Choose any random string and configure it both on the app\nand in Nginx config.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxied_example"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FORWARDED_SECRET "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR SECRET"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This should display external (public) addresses:")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remote_addr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(" connected to ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url_for"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n"')])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Forwarded: ')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forwarded"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\\n"')])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access_log"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Since this is going to be a system service, save your code to\n"),e("code",[t._v("/srv/sanicexample/sanicexample.py")]),t._v(".")]),t._v(" "),e("p",[t._v("For testing, run your app in a terminal.")]),t._v(" "),e("h2",{attrs:{id:"nginx-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-configuration"}},[t._v("#")]),t._v(" Nginx configuration")]),t._v(" "),e("p",[t._v("Quite much configuration is required to allow fast transparent proxying, but\nfor the most part these don't need to be modified, so bear with me.")]),t._v(" "),e("p",[t._v("Upstream servers need to be configured in a separate "),e("code",[t._v("upstream")]),t._v(" block to enable\nHTTP keep-alive, which can drastically improve performance, so we use this\ninstead of directly providing an upstream address in "),e("code",[t._v("proxy_pass")]),t._v(" directive. In\nthis example, the upstream section is named by "),e("code",[t._v("server_name")]),t._v(", i.e. the public\ndomain name, which then also gets passed to Sanic in the "),e("code",[t._v("Host")]),t._v(" header. You may\nchange the naming as you see fit. Multiple servers may also be provided for\nload balancing and failover.")]),t._v(" "),e("p",[t._v("Change the two occurrences of "),e("code",[t._v("example.com")]),t._v(" to your true domain name, and\ninstead of "),e("code",[t._v("YOUR SECRET")]),t._v(" use the secret you chose for your app.")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" example.com")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keepalive")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" 127.0.0.1:8000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#server unix:/tmp/sanic.sock;")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" example.com")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl http2 default_server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:443 ssl http2 default_server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Serve static files if found, otherwise proxy to Sanic")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /var/www")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" @sanic")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" @sanic")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allow fast streaming HTTP/1.1 pipes (keep-alive, unbuffered)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" 1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_request_buffering")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_buffering")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Proxy forwarding (password configured in app.config.FORWARDED_SECRET)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" forwarded "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_forwarded;secret=")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),t._v("YOUR SECRET"),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allow websockets and keep-alive (avoid connection: close)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" connection "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upgrade"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" upgrade "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("To avoid cookie visibility issues and inconsistent addresses on search engines,\nit is a good idea to redirect all visitors to one true domain, always using\nHTTPS:")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redirect all HTTP to HTTPS with no-WWW")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:80 default_server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" ~^(?:www\\.)?(.*)$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redirect WWW to no-WWW")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl http2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:443 ssl http2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" ~^www\\.(.*)$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),t._v("://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The above config sections may be placed in "),e("code",[t._v("/etc/nginx/sites-available/default")]),t._v("\nor in other site configs (be sure to symlink them to "),e("code",[t._v("sites-enabled")]),t._v(" if you\ncreate new ones).")]),t._v(" "),e("p",[t._v("Make sure that your SSL certificates are configured in the main config, or\nadd the "),e("code",[t._v("ssl_certificate")]),t._v(" and "),e("code",[t._v("ssl_certificate_key")]),t._v(" directives to each\n"),e("code",[t._v("server")]),t._v(" section that listens on SSL.")]),t._v(" "),e("p",[t._v("Additionally, copy&paste all of this into "),e("code",[t._v("nginx/conf.d/forwarded.conf")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RFC 7239 Forwarded header for Nginx proxy_pass")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add within your server or location block:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#    proxy_set_header forwarded "$proxy_forwarded;secret=\\"YOUR SECRET\\"";')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configure your upstream web server to identify this proxy by that password")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# because otherwise anyone on the Internet could spoof these headers and fake")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# their real IP address and other information to your service.")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Provide the full proxy chain in $proxy_forwarded")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_forwarded")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_forwarded")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_forwarded;by=")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),t._v("_"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hostname")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),t._v(";proto="),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),t._v(";host="),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),t._v(";path="),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),e("span",{pre:!0,attrs:{class:"token escape entity"}},[t._v('\\"')]),t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The following mappings are based on")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://www.nginx.com/resources/wiki/start/topics/examples/forwarded/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_forwarded_elem")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# IPv4 addresses can be sent as-is")]),t._v('\n  ~^[0-9.]+$          "for=$remote_addr"'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# IPv6 addresses need to be bracketed and quoted")]),t._v('\n  ~^[0-9A-Fa-f:.]+$   "for=\\"[$remote_addr]\\""'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix domain socket names cannot be represented in RFC 7239 syntax")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"for=unknown"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_forwarded")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_forwarded")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If the incoming Forwarded header is syntactically valid, append to it")]),t._v('\n  "~^(,[ \\\\t]*)*([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?('),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("([!#$%&'*+.^_`|~0-9A-Za-z-]+=([!#$%&'*+.^_`|~0-9A-Za-z-]+|\\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\\"))?)*([ \\\\t]*,([ \\\\t]*([!#$%&'*+.^_`|~0-9A-Za-z-]+=([!#$%&'*+.^_`|~0-9A-Za-z-]+|\\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\\"))?("),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v('([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?)*)?)*$" "$http_forwarded, $proxy_forwarded_elem"'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Otherwise, replace it")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_forwarded_elem")]),t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("For installs that don't use "),e("code",[t._v("conf.d")]),t._v(" and "),e("code",[t._v("sites-available")]),t._v(", all of the above\nconfigs may also be placed inside the "),e("code",[t._v("http")]),t._v(" section of the main "),e("code",[t._v("nginx.conf")]),t._v(".")])]),t._v(" "),e("p",[t._v("Reload Nginx config after changes:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx -s reload\n")])])]),e("p",[t._v("Now you should be able to connect your app on "),e("code",[t._v("https://example.com/")]),t._v(". Any 404\nerrors and such will be handled by Sanic's error pages, and whenever a static\nfile is present at a given path, it will be served by Nginx.")]),t._v(" "),e("h2",{attrs:{id:"ssl-certificates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssl-certificates"}},[t._v("#")]),t._v(" SSL certificates")]),t._v(" "),e("p",[t._v("If you haven't already configured valid certificates on your server, now is a\ngood time to do so. Install "),e("code",[t._v("certbot")]),t._v(" and "),e("code",[t._v("python3-certbot-nginx")]),t._v(", then run")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("certbot --nginx -d example.com -d www.example.com\n")])])]),e("p",[e("code",[t._v("<https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/>")]),t._v("_")]),t._v(" "),e("h2",{attrs:{id:"running-as-a-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-as-a-service"}},[t._v("#")]),t._v(" Running as a service")]),t._v(" "),e("p",[t._v("This part is for Linux distributions based on "),e("code",[t._v("systemd")]),t._v(". Create a unit file\n"),e("code",[t._v("/etc/systemd/system/sanicexample.service")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Unit]\nDescription=Sanic Example\n\n[Service]\nUser=nobody\nWorkingDirectory=/srv/sanicexample\nExecStart=/usr/bin/env python3 sanicexample.py\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("p",[t._v("Then reload service files, start your service and enable it on boot:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start sanicexample\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" sanicexample\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);