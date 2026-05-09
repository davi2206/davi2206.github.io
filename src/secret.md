---
title: Very secret personal notes
layout: _article.njk
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