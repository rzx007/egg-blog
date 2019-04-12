{% extends "parent.tpl" %}

{% block head %}
<title>文章内容</title>
{% endblock %}

{% block content %}
<div class="home">
    <div class="timeLine">
        <h2 class="timeline-title">标签: {{typeStr}}</h2>
        {% for item in list %}
         <div class="timeline-item">
            <time>{{item.time}}</time>
            <a target="_self" href="/article/{{item.id}}.htm">{{item.title}}</a>
        </div>
        {% endfor %}
    </div>
</div>
{% endblock %}
