# Caching Proxy CLI

A simple CLI tool that starts a caching proxy server.  
It forwards requests to an origin server and caches responses.

## 🚀 Install

Clone the repo and run:


This creates the global command `caching-proxy`.

---

## 🧪 Usage

Start proxy:

caching-proxy --port 8080 --origin https://dummyjson.com


Now visit:


### Response Header:

- `X-Cache: MISS` → first time
- `X-Cache: HIT` → cached

---

## 🧹 Clear cache

caching-proxy --clear-cache

