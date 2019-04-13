{% extends "parent.tpl" %}

{% block head %}
<title>首页</title>
{% endblock %}

{% block content %}
<div class="home">
 {% for item in data %}
    <div class="home-article-wrapper">
      <div class="passage-meta">
        <span><i class="iconfont">&#xe66c;</i>{{item.create_time}} </span>
        <span>|<i class="iconfont">&#xe61d;</i> 
            {% if item.invisible %}
            UNLOCK
            {% else %}
            LOCK
            {% endif %}
        </span>
       </div>
       <h1 class="home-article-title">
            <a href="{{item.url}}">{{item.title}}</a>
        </h1>
        <div class="home-article-content">
            {{item.detail | safe}}
        </div>
        <a class="home-article-read" href="{{item.url}}">
            README MORE &gt;&gt;&gt;
        </a>
         {% if item.tags %}
        <div class="passage-tags">
            {% for ele in item.tags.split(',') %}
                <a href="/tags/{{ele}}"><i class="iconfont">&#xe658;</i>{{ele}}</a>
            {% endfor %}
        </div> 
        {% endif %}  
    </div>
 {% endfor %}
 
   {# <div class="home-article-wrapper">
      <div class="passage-meta">
        <span><i class="iconfont">&#xe66c;</i> 2019-03-04 </span>
        <span>|<i class="iconfont">&#xe61d;</i> UNLOCK</span>
       </div>
       <h1 class="home-article-title">
            <a href="##">[置顶]一份值得收藏的知识清单</a>
        </h1>
        <div class="home-article-content">
            <p>随着学习的深入，越来越发现<strong>知识体系</strong>的重要性。平时积累的零碎知识，如果不做关联，在一些时候（比如面试）会不堪一击。</p>
            <p>所以，特别整理和分享自己这份<strong>开袋即食</strong>的知识清单，方便自己看，也希望对大家有帮助哈~</p>
        </div>
        <a class="home-article-read" href="article/msg">
            README MORE &gt;&gt;&gt;
        </a>
        <div class="passage-tags">
            <a href="##"><i class="iconfont">&#xe658;</i>JavaScript</a>
            <a href="##"><i class="iconfont">&#xe658;</i>CSS3</a>
            <a href="##"><i class="iconfont">&#xe658;</i>HTML5</a>
        </div> 
   </div> #}
</div>
{% include "foot.tpl" %}
{% endblock %}
{% block script %}
{% endblock %}
