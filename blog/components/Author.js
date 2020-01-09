import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://wx3.sinaimg.cn/mw690/5afb4854ly1gabhyttjnzj21111jkkjl.jpg"></Avatar>
      </div>
      <div className="author-introduction">
          <Divider>社交账号</Divider>
          <Avatar size={28} icon="github" className="account"  />
          <Avatar size={28} icon="qq"  className="account" />
          <Avatar size={28} icon="wechat"  className="account"  />
      </div>
    </div>
  )
}

export default Author