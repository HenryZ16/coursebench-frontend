import { provide, reactive } from "@vue/composition-api"

export default () => {

  const testUserProfile = {
    email: "1@shanghaitech.edu.cn",
    year: 2022,
    grade: 1,
    nickname: "小明",
    realname: "吴迪",
    avatar: "https://tse4-mm.cn.bing.net/th/id/OIP-C.JdnTbs1HeiRA1zP2s7hxcgAAAA?pid=ImgDet&rs=1",
    show_email: true, 
    show_year: true, 
    show_grade: true, 
    show_realname: true, 
  } // Just for test

    
  const getUserProfile = () => {
    const userProfile = testUserProfile
    const gradeItems = [ "本科生", "硕士研究生", "博士研究生" ]
    userProfile.grade = gradeItems[userProfile.grade]
    return userProfile
  }

  const userProfile = reactive(getUserProfile())

  const statics = {
    background: "https://cdn.luogu.com.cn/upload/image_hosting/y45o30wx.png", 
  }

  const status = reactive({
    showAll: false,
    editProfile: false, 
  })

  provide("userProfile", userProfile)
  provide("status", status)

  return { userProfile, statics, status }
}