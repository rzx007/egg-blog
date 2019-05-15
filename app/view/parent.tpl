<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/css/index.css">
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    {% block head %}{% endblock %}
</head>

<body>

    <nav class="navbar">
      <div class="nav_brand">
        <div class="nav_brand_title"><a href="/">
            <img src="/images/熊猫.png" width="40px" />
        </a></div>
         <div class="nav_brand_name" style="font-size:16px;">&nbsp;|&nbsp;&nbsp;愤怒得倒霉熊</div>
      </div>
      <div class="nav_right">
        <div>
            <a href="/">首页</a>
            <a href="/categories">分类</a>
            <a href="/classify">标签</a>
        </div>
      </div>
    </nav>
<div class="container">
    {% block content %}{% endblock %}
    {# 总数：{{pageNum}} #}
</div>

<script type="text/javascript">
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }
    $("#to_top").click(function(){
        $('html').animate({ scrollTop: 0 }, 500);
    })
    
</script>
{% block script %}{% endblock %}
</body>
</html>