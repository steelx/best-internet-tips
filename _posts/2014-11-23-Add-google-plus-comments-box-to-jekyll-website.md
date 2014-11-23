---
layout: single
title: Add Google-plus Comments Box to Jekyll website
meta: This post shows how to step-by-step Add Google-plus Comments Box to Jekyll blog or to any static website.
category: web
featured: true
comments: true
---

# Add Google-plus Comments Box to Jekyll website or any static page

This post shows how to step-by-step Add Google-plus Comments Box to Jekyll blog or to any static website. You can see the preview at bottom of this page. This website was build using Jekyll.

### Installation

If you are using Jekyll;

1. Create `comments.html` file inside your `_includes` folder with below code

{% highlight ruby linenos %}
  <script src="https://apis.google.com/js/plusone.js"></script>
  <div class="g-comments"
      data-href="{{site.baseurl}}{{page.url}}"
      data-width="642"
      data-first_party_property="BLOGGER"
      data-view_type="FILTERED_POSTMOD">
  </div>
{% endhighlight %}


2. Now just make sure you have this property defined in your `_config.yml` file (replace the url with your website URL)

{% highlight ruby linenos %}
baseurl: http://steelx.github.io/best-internet-tips/
{% endhighlight %}


3. include `comments.html` wherever you wana display Google plus comments, preferably inside posts layout file.
{% highlight ruby linenos %}
  {% include comments.html %}
{% endhighlight %}

I hope this post was useful, please dont forget to Google PLUSONE this post or comment below.