{% extends "parent.tpl" %}

{% block head %}
<title>文章内容</title>
{% endblock %}

{% block content %}
<div class="home">
    <div class="classify-wrap">
    {% for item in list %}
         <span class="classify-item">      
            {% if item.num<=3 %}
             <a target="_self" href="/tags/{{item.type}}" style="font-size:16px">{{item.type}}</a>
            {% elseif item.num>=10  %}
             <a target="_self" href="/tags/{{item.type}}" style="font-size:54px">{{item.type}}</a>
            {% else  %}
             <a target="_self" href="/tags/{{item.type}}" style="font-size:34px">{{item.type}}</a>
            {% endif %}
        </span>
    {% endfor %}
    </div>
</div>
<script>
</script>
{% endblock %}
