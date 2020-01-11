import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb, Affix } from 'antd'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'

import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import Tocify from '../components/tocify.tsx'

import axios from 'axios'

const Detailed = (props) => {
  
  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = (text, level, raw) =>{
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: (code) => {
      return hljs.highlightAuto(code).value
    }
  })

  const html = marked(props.article_content)
  

  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item><a href="/list">视频列表</a></Breadcrumb.Item>
                  <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>
             <div>
                <div className="detailed-title">
                  React实战视频教程-技术胖Blog开发(更新08集)
                </div>
                <div className="list-icon center">
                  <span><Icon type="calendar" /> 2019-06-28</span>
                  <span><Icon type="folder" /> 视频教程</span>
                  <span><Icon type="fire" /> 5498人</span>
                </div>
                <div className="detailed-content" 
                  dangerouslySetInnerHTML={{__html: html}}>
                </div>
             </div>
            </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
   </>
  )
}

Detailed.getInitialProps = async(context) => {
  const id = context.query.id;
  return await new Promise(reslove => {
    axios.get('http://127.0.0.1:7001/default/getArticleById/'+ id).then(({ data }) => {
      reslove(data.data[0])
    })
  })
}

export default Detailed