---
tags: exclude
layout: _article.njk
title: Very secret personal notes
date: "2026-08-15"
summary: "A secret file, that no one should see"
permalink: secret.html
---

{{ ctf.flags.secret }}<br>
{{ ctf.hints.secret }}

<script>
    var f = '{{ ctf.flags.console }}';
    var h = '{{ ctf.hints.console }}';
    console.log(f);
    console.log(h);
</script>