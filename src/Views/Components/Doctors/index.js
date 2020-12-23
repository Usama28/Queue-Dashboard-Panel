import React,{useEffect,useState} from 'react'
import { Icon, Button, Image , Card ,Grid,Modal ,Form,Input,Accordion} from 'semantic-ui-react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {connect } from 'react-redux'
import './index.css'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function Doctor() {
  
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state
  const [firstOpen, setFirstOpen] = useState(false)
  const [secondOpen, setSecondOpen] = useState(false)
  const [name,setName]=useState('')
  const [type,setType]=useState('')
  const [patientName,setPatientName]=useState('')
  const [disease,setDisease]=useState('')
  const [duration,setDuration]=useState('')
  const [image,setImage]=useState('')
  const [patientList,setPatientList]=useState([])
  const [colors,setColors]=useState(['#e0eff6','#fcf5db', '#f9edef','#fcf5db','#eeebf4','#ebf3e8','#ebf3e8'])
  const [doctorList,setDoctorList]=useState([
        {
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36otcu9zxyk0cTG6DHNR6JQeAM7qGPyoJ8g&usqp=CAU',
          name:'Dr. Joseph',
          type:'Cardiologist',
          color:colors[Math.floor(Math.random()*8)]
        },
        {
          image:'https://www.miraldental.com/wp-content/uploads/2018/12/doctor-img2.png',
           name:'Dr. Martin',
           type:'Dentist',
           color:colors[Math.floor(Math.random()*8)]
         },
        {
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAmVY0MUa03zHNdikqqdyfcBF52fqOZaKpQ&usqp=CAU',
          name:'Dr. Katherin',
          type:'Gyanocologist',
          color:colors[Math.floor(Math.random()*8)]
        },
         {
          image:'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
          name:'Dr. Sophie',
          type:'Surgeon',
          color:colors[Math.floor(Math.random()*8)]
        },      
  ])
  
  const addDetails=function () {
    const temp=[...doctorList]
    temp.push({
      image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PEA8PDw8QEA8PDxAVDw8PEBANDw8VFhYWFhUVFRUYHSggGBomHRcWITEhJSkrLi4vGiAzODMsNygtLisBCgoKDg0OGxAQGy0lHyUtLS8uLS0tLS8tLS0tLS0tLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcDAgj/xABEEAABAwICBgYGBwYFBQAAAAABAAIDBBESIQUGMUFRcRMiYYGRoQcyQmKxwRQjUlNyksIzQ4KistEkY3Ph8BU0g9Lx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBQEEBv/EADQRAQACAQIEAgkEAwEAAwEAAAABAgMEERIhMVEFQRMyYXGRobHR8CKBweEjM/FCFSRSFP/aAAwDAQACEQMRAD8A7igICAgICAgICAghBKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAghAQEBAQEBAQEBAQfMkjWgucQ1rQS5ziGtaBmSSdgQc11n9J1i6Oga0gZGokBIP8Aps+Z8N6otl7PTTB52UqfXDSjzc1s9/dcIh4MACr47d13o6dntRa86WiIIqnvG9sobK087i/gQkZLdycVJ8myrfSdpOQAM6GDZcxx43E7/wBoSLdylOWyEYKQ2VJ6Vaj6pslNEbFomkDnDEL9YtZ7Jt2ldjNKM6ePKXQKXWjRssjYo6uF8jzZrQ6+I8AdhKui9Z81E47RG8w26kgICAgICAgICAgICAgICAgICAgICCk61ekSno3uhgZ9ImaSHnFhijI2gu2uI4DxuqrZYjlC6mGbc5c91h14rq+PoZTHHFiuWQtezHbYHkuNwNtuPcqbZJtyl6KYq1neFZUFggICAgvfo2/6XDK2oqqqNtQCWwRPD2tjvkXueRhxHYM8r8Tlbj4YneVObimNoh2MZr0vGICAgICAgICAglAQEEIJQQglAQEBBq9Z6401HVTtyfHA8sPB1rN8yFG07RMpUje0Q/Oi8bQEBAQEBAQEHUfRDp+d5fQyYnxxxl8Lzn0QBa0xk8OsCOFiNlrX4rT0ebPSPWdOV7zCAgICAgICAgIIQEBAQEBAQEBBXvSE0nRlZb7sHwc0n4KGT1ZWYvXhwJeR7hB6SQSNYyRzHCOS/RvI6rrEg57jkcim8dHdnmjggICD6jY5zmta0ue4gNa0FznE7AANpXR3P0e6r/8AT6cmS30mezprWOAD1Ywd9rm54k7rL046cMPFlycU+xaVYqEBAQEBAQEBAQEBAQEBAQEBBi6R0jBTsxzPDBuvm5x4NAzJ5LsRMqsuamKN7zsoOtGtr6mGanhjDYpY3tLpOtI4EEZAZN8+5SnHvWWZ/wDKz6SvDG0bxvv123+Tk+McVnPq3w4lxDWgkkgADaSdgQdjptFxNp46Z7WuayJrHBwDg6wzJHPNeSbc93qisbbKxpPUUEl1NJg/y5LvYOTto77qyuXurnF2NBaoPHSMrGQPjIBYWF/Std2OsCBbdfb3pbJ2K4+7IqNQ6c5sklZ2YmvHmL+a5GaXZxQxxqCL/wDcOt/ptv8AFd9N7HPQsDRujzTyTSxiQNiqHxRVBuCCzqus8AAG9xktLSRE14p6vl/HM2SmStKzMV/nfuuOiddamKzZx07OOTJR3jI9/ivTNI8mfh8SyU5X5x8/z83XbRWmKaqbeF4JA6zD1ZG82/PYqprMNjDqMeaN6T92euLxAQEBAQEBAQSgIIQSghBKAgrWsmtUdNeKK0k+/eyL8XE9nwU603Z+r19cX6ac7fKPf9lFayrrpssc0rtp3NHwa1W8ohixGXUX7z+fCFx0NqTCyz6k9K/7ttxE3nvd5DsVc37NbB4ZSvPJznt5f3+cnPtZdQqgVVSabojCZC6NpeWOaHdYstawAJIGewBZmS9a2mH02KlrUiWRqnqe+F7aiqtjYbxRAh2E/acRlcbgOapvk3jaF9Me07yuFSJC09GWtf7Je0vaOYBBOXaqY9q6fY17KOvxAurGYQRdjKZouOFy4kKe9eyG1u7aqCbD0hSSyYejqJILXuGNjcHc8QK7ExHk5MTPmihpZ4z9ZUumbb1XRxsIPG7QuzMT0hyInutmgNEtpaZkBs43kdKbXD3yOc9+3dice6y16V4axDFy247TMtZpjU2mmu6H6iT3ReI827u7wKti8wy8/huO/On6Z+Xw+yj11BVUMjcYdG4H6uVhOF34XfLyVkTEsbJiy6e/PlPlMLfq3rg2TDDVENkOTZfVY/sd9k+R7FC1OzV0niMW/Rl69/KVuVbVSgICAgICAghAQEBAQEFQ1v1o6LFT07vrNkkg/d+633u3dz2WVr5yytdruD/Hj6+c9v7VvV7V+Wsde5ZCD15TmSd4bxPbu8lO1tmdpdJbPO/SO/2dJ0do+GmYI4WBrd+9zjxcd5VMzu+hxYaYq8NIZS4tVjScRbK++9xcO0HNZOes1yS2dPaLY42YqqXCCtUVPpMaRlfI530Mh2EF4MZbbqBrL5OB2m248QrJmvD7VcRbi9iyqtY1Ws9PUyUsjKYkSnDbC7A5wuMQDtxIUqTETzRvEzHI1YgqYqWNlSSZRividjc0XOEF28gJeYmeRSJ25uitNwDxC2YYUpQeVXSxzMMcjA9jtrXC4/2PakTsjelbxw2jeHOdZtV30t5Yrvp9983RdjuI7fHturfd8/q9DOH9Vedfp+d/iz9UdaCwtp6h12Gwilcc2cGuP2eB3ctnLV84X6HXcO2PJPLyn7r4qm2ICCUEICAgICCUEICCua46f+jR9FEfr5Rkfu273c9w8dynSu7P1+r9FXhr60/KO/2U/VnQT6yQlxIhYfrX73HbhB4ned3grLW2ZWk0s57c/Vjr9nT6eBkbWsY0NY0Wa0CwAVD6OtYrHDXo9ESEHjVUrJRZ4vwOwjkVC+Ot42lZjy2xzvVWqyHo3uZuByvtttCyslOC01a+K/HSLPFQWCD5e4cQOBy+aD5geXNubbTmNhsbXHNJIeiC4MFgBwAW1HRgzzlK64IIc0EEEAgixBFwQhMbuca36ufRndNEP8O85jb0RO78J3eHBXUtu+e12j9FPHT1Z+X9NxqPp/GBSzOu9o+pcdr2j2T2jd2clG9fN6/DtXxf4r9fL7Lgq2sICAgICAgICAgxtI1rIInzP9VjbniTuA7SbDvXYjdXlyVx0m9ukOWRtnr6rjJM+5O1sbf/AFaPlxV3KsPmYi+py+2fl/x1PR1DHTxMijFmsHe47ye0lUzO76bFiripFK9IZK4sEBAQaTT8FnNkGwix5jZ5fBeDV05xZo6K/KaNSvG9yQCchmeAzSI3Jnbqh8X2m59rV3aY8nOKJ832YX2vhdbjhNvFd4Lbb7Ocdd9t43fdHFjkY3i4X5DM+S7irxXiEctuGkyta2GIIJQQg+KiFkjXMe0OY8EOadhBRG1YtE1npLlOm9HSUNRha4ixD4JN5F8jzByP+6vid4fM6jDbT5do98T+dnSNAaUbVwMlFg7ZI0ey8bRy3jsIVNo2l9Bps8ZscW+PvbFcehKCEEoIQSgICAgofpD0nieylacmWfJ2uPqjuFz3hW4482J4pm3tGKPLnP8ADZahaK6KE1Dh15/V4tj3eO3lZRvPPZ6PDMHDj9JPWfp/fX4LUoNMQEBAQYOm/wBg822Yf6gqNT/rl6NL/tj88laab5rLa70ikLXBw2g5KVbTWd4RvWLRNZbaPS0ZHWDgeyxC91dXXbnDPto778phjVukcYLWggHaTtKpzanjjhquwaXgnis99AU+bpDu6rfmVPSU62Q1uTpRu17meICAgINHrfon6TTuwi8sV3x8T9pvePMBSrO0vFrtP6XFO3WOcfb91R1E0n0NR0RP1dQA3sDx6h78x3hWXjky/Dc/Bl4Z6W+vk6UqX0IgICAghAQEHzLIGtLnGzWgkngALlHJmIjeXJoGPrqsA3vUSku4tbtPg0W7lf0h8vWJ1Gfn/wCp+X9Q60xgaA1osAAABsAGQCofURERG0JR0QEBAQYel/2L/wCH+oKjU/65ejS/7Y/PJVi0jMbN4WW10tkB7OaD7ug+6doe9rL2xEAngpY68VoqhkvwUm3ZbIYmsaGtFgBktetYrG0MW1ptO8vpSREBAQEBByrWiiNLVvDOqCRLER7NzfLk4HwCvrO8PmdZi9Fnnb3x+e90vRdWJ4Yph+8Y0kcDbMdxuFTMbS+hw5PSY4v3hlLi0QEBAQEBBpNc6noqKa22S0Y/iNnfy4lKkc3j19+HBb28virfo6pMU00xH7Nga3m83Pk3zU8k8mf4Vj3va/aNvj/xf1U3BAQEBB8TStY0ucbALsRMztCNrRWN5VquqHTOxEkAeq0E4RzG89quvgi2Oad/N48ertTLGTt5MchY+bR5MfPbePY39P4hhzct9p7S+S0HcvK9yBEOHxV+LS5Mnqxy7vLn1uHDytPPtHOfz3vrohaxGXBamDQ1xzFrTvPyYuq8TtlrNKxtE/FtNFVwj6jyAzcTkGf2C9GWm/OHl0+baeGW9aQQCDcHYRmCvO94gICAgIKd6R6S8cEwGbHljuThcX72+asxyyfFce9a37cvj/xkejyqxUz4ztilNvwu6w88S5kjms8LvvimvafrzWlQaQgICCUEICCn+kia0VPH9qRzvytt+tWY+rJ8Vt+itfb9P+sn0ewYaVz/ALyZ57gA35Fcv1WeF12w795n7LOoNIQfL5Gjaf7rsRMuTMQ8XVQ3DxyU4x90eN5GoeSBe1yNilwRCPFKpUMZ0hV1NY4kw0hdBRi5sXD9rJ232A8D2LlPW3RyxvSYZd//AKvSzUoKcNaCa31v8LfBbK1tnSX558lf/wDw4uHi4Y4nnjxPNxcHHPB0XJUPQ+S5B70tIyYlkjQ+MtONpF2uByt5qN55LsEb39zE1XlfTPn0a9xJpXNfTOJzfTvPVHbhPV8ty89eu0vfPdZm1Dh281KaQcUvdlSDty+ChNJSi0PZQSSghBptcIMdFP7rQ8fwuBPkCpU6vJr68Wnt8fgrXo3mtLPH9qNrvyut+tTydGd4Vb9dq+z6f9X5VNxKCEEoCAgIKJ6SndelHuynxLP7K3GxPFvWp+/8LBqYy1DB2h58XuKhfq9+gjbT1/f6t2ovY+JX4QT4LsRvLkztDXk3V6oXRgaaqzBT1Ew2xU8rm/iwkN8yo26EdUaoUQgoaWO2fQte7jif13eblCOjs9XhVxYXubuvlyOYXprO8M7JXhtMNLrGZW0s3R7cOZ3hvtW7rq7Dtxxu8+ff0c7OarSY7p2gzMaaDpfW6MXO8j2b9trXWZk2452bOHfgji6tiBZVrG30VFZhdvcfIf8ACqrzzezT12ru0esreir9G1Ay6R8lNJ7weMUY/NcqrpL0x0WFWoiDLpJLjDw2clTePNOsshQTEGFppgdTVLeMEo/lK7HVTqI3xWj2T9FD9Hzv8Ye2CT+ph+Stv0Ynhc/5/wBp/h0lUvoRAQEEICAgovpKb16U8WyjwLP7q3GxfFvWp+/8LDqeb0NP+Fw8HuChbq9+hn/69fzzblRetiVbswOCtxx5q7y8FYiIK7r7IW6OrTvLIgORlYD8VC/R2vVZoGgMYBsDWgdwXBgaXjza7jkfl81bjnyeTUV5xLT1zw2KVx9mN58GlXVjeYeW07VlydarDdZophJFE8e3Gx3iAVlWjaZht1nesS92NJIA2k2CinEbzssMbA0Bo2AALztGI2jZWtfLdHRO3s0lSkcdrgoynDfq1EQfcTrEHxUbRvDsTtLPVC0QYmlzanqDwgl/pK7HVVmnbHafZP0UL0et/wAWeyCT+pgVt+jD8L/3/tP8OkKl9CICAglBCAgp/pIhvFTyfZkc38zb/oVmNk+K1/RW3t+v/GdqFNio2t+7kkb4nH+pcv1XeGW3wRHaZ+/8rGoNBrpHXJPEr0RG0KZnm+V0EGh16iL9H1Q3dGD+VzXfJRv0dr1b3Rz2uhie3Y+KNwtvu0FR3E18eKN3EZju/wCFSrO0qstd6yqmn34aWoP+U4eIt8168XrwzM3+ufc5gtNjOjapTY6SLizE09xNvIhZ2eNry1tNO+OFk0XFd99zRfvOz5rzXnk92Cu9t+zcKp7FU11a0u0dE31pNIwFw91tyVyfJKFjViIgIM+B12g9i89o2lbE8nouOtTrVLgoqk8Yi38/V+alXq8utttgv7vryVb0cQ3lnk+zG1v5nX/Qp5OjN8Kr+u1vZ9f+L+qm4hBKAgICCEGk1zpukoprbY7SD+E3d/LiUqTzePX04sFvZz+H9NH6N6rOohJ24ZGj+V36FLJHm8XhOT1qfv8AxP8AC6zOs0nsUKxvLYno169CoQEGLpOn6WCeL7yGRv5mkLk9CGHqNWCWgpc+s2INI39Qln6VXHR2erfKTija7Do6WdvvMA5Y2n4L26fneJY+sjhpaHNlpMddNQZrxzR/Ze135hb9K8WqjnEtHR2/TMOh6Miwsvvcb925Z953ltYK7V97Ke6wuorVU0yC/SWjGH2RVSv7mAN80nrDsdJWRTcEBBl0ZyI4FU5OqdGQoJqp6RKrDTsivnLILj3WZnzwqeOObM8Uvtiivefp+Qn0eU2GmfIdsspt+FvV+OJMnU8Lptim3efpy+61KDTEBAQQgICD5ljDmua4Xa4EEcQRYo5MRMbS5foeR1DXta85MkdFITldrsg7l6rlfPOHzenmdPqNp8p2n3fm0umVZ6vMqunV9Hbow1crEBBpJGOrJpoy97KWncGObG4xuqJcIc4OcMwxocBYWub3yCj1l3o+3asaPsMNNGwjY+IGKUdokbZwPenDBxSydCVMofNSTPMj4BG+OY2DpoZMWAutljBa5pI22B3qEdie6v8ApQ6sDCP3krQf4Q4/2Xu0XOzJ8TjasT3c0WmxFl1AefpRi+9jI7wQfhiXm1Xqb9nt0PPJw93XALZDYNiyX0bxkdc9g+K7ECt+vpjsh0d4OfL/AGXP/Tvksam4ICDIozmeSrydEqMpVLHNdeKwz1fRs6whAjaBveTd1u8gdyupG0PnvEcnpM3DHly/d0DRVGIIYoR+7Y0E8TbrHvNyqpneW5hx+jxxTtDKXFogICAgICAgofpD0ZZ7Klo6rwGS9jgOqe8XHcFbjnyYnimDa0ZI8+Utxq7pX6TTR4jeSLqScSR6ru8ed1KK7TL2aTP6XFG/WOU/ntbJSekQEGr0IxzXVrSLD6Y9zdmYeyN1/ElRr5uy2ik418sWCrp5r2Do5YXDccREjL8i135ioWjnu7HRiekCg6ahkIF3QESt5Nyd/KXeC9Glvw5I9vJ4tfj48M+zm5Atd82u3ou0djnlqSMoWYWH337bcmg/mXh1t9qxXu1fC8W95vPk6TI6w7Ss6G211fWdELC17b9gCWtslWu7U0M0YqJKixMkrWNkJPss2YRsCri207pTXksIKvVpQEHtS+t3FQv0Sr1fOnNItpYJJjtaLMH2nnJo8fK6qiN52Q1GaMOOb/m6i6kaPdUVRmfdzYTjc4+1I6+H5u7hxVt52hi+H4ZyZuO3lz/f85ukKl9CICAgIJQEBBCDG0jRMqInwv8AVe2194O4jtBsV2J2V5cVclJpbzc10dUSaPqnMlBABwTAbC3c8eRHYSr4nd89hvbS5pi3un7/AMr+1wIBBBBAIIzBB2ELreid+cPpHRBh0uU1QOJid4st+lRjrLs9GYpOMPSoPRPcPWjtI3mw4vko26Ox1Z5DZGEEXa9pDhxBFiPArnRyY3jaXCtI0joJpYXbYpHN52Nge/at2luKsW7vk8tJpea9pdc1I0d9HooQRZ8o6WTdm/Zfk3CO5ZGovx5J+D6LRYvR4Yjvz+LbuNzdVxD1NRpmnJ6w2EDPgRxVd457p1nya6lpnlw47gM1XEbprLG2wA4ADwXohTL6XQQetN6w7/goX6O16qHrdpZ1ZO2GG7443YYw397IciR8B3nelY2jeWHrtROfJwU5xHT2z+cl41f0W2kgZELF3rSOHtPO3u3DsCqtO8tnTYIw44r5+fvbJcehCCUBAQQglAQEEIK3rjoH6SzpYh9fGMh943bh57x3jep0tsz9fpPS14q+tHzjt9le1T05gtTTGzSbROdlgP2D2X2cPhc8Oh1XD/jv08vsuaNgQYU4dHJ0oaXscwNkDRdzcJJa4DftII5KM8p3d8nrT1jJCWtxdUAnExzBnfiOxdid3Jh41DJZS6ItDIrgOfiu6RuRIaN19hJXJ3nk7G0NhGbHsSYcULWvQHS6VpgB1KsNMn/i/acuoG95XuwZuHDPs/noyNVpuPU17W6/t1+S/wAhtkF4Ya7zUgQQ1oGwAcrBc2EroICCsa16dwB1PC7rkESvHsA7Wg/aPl8OMzXavhj0dJ5+fsZGo+gMAFVM2z3D6lp9lp9s9p3dnPKu9vJPw7ScP+W8c/L7rkq2sIIQEBAQEBAQEBAQU/W/VcyYqinb9ZtliA/ae833uI389tlLeUsnXaHj3yY+vnHf+/q1mrusuG0NSchkyU+z7r+zt8Vao0mt2/Rk+P3XAG6NdKAgICD6wtJa8gFzA4NO8YrXtzsFHn0c2jfd8kqTogICAgIKxrFrKI8UVOQZMw+QZtj4hvF3wRm6vXRX9GPr37f289UtWDIW1NS04L4o43bZDtxOv7PZv5ba7W8oV6LQzafSZOnlHf2z+c19VTcEBAQEBBKAghBKCEBAQEFa1l1Ujqbyw2jn37mS/itsPb4qdb7M7V6CuX9VOVvlP53VWh0rV0D+hmY4tG2J+RaOLHcPEK2J3ZuLUZdNbgvHLt9vzZb9GaWp6kfVv61s43dV7e7fzGS61sOox5Y/TP7ebOReICAgICAgIMWv0hDA3FK8N4Da53JozKKsuamKN7zsp+k9YaiqPQ07XNa42DW5yyc7bB2DxXGTm1mTNPBjjaPnLeat6nNjwy1QDnixbDk5jO132j2bOartfs9ek8Oiu18vXt5R+fBcFW1hAQEBAQEEoCAgICAgICAgxNI6NgqW4Jow8bjsc3taRmF2JmOirLhplja8bqVpTUmeM46V/SAZhriI5W8nZA+Ssi/dkZvDL1nixTv8p/PgwoNYa6md0c7S63szNLJLdjt/M3U1NdZnwzw3jf38p/Pi3NLrdSu/aB8R7R0jfFufkuvZTxHFPrbx8/o2cOl6R/qzxci8NPgc0emuoxW6Wj4stsrDsc08nAoti0T0kMjRtcBzICO7wxptKUrPWniHZjaT4DNFVs+KvW0fFrarWykZ6mOU+60tHi6yPPfxDDXpvP57WlqtaauY4IGYCdgY0zSnll8AjxX1+XJPDjjb3c5/P2e2jtT6uod0lS4xA7S89JM7u3d57lCbx5J4vDsuSeLJO3zn8/Nl10ToampW2hZYkdZ7utI7mfkMlVNplr4NNjwxtSP382wXF4gICAgICAgIIQEBAQEBAQEBAQedRTxyNwyMa9v2XtDh4FEbUraNrRvDRVmplBJm1r4jxicbeDrjwU4vLxZPDcFukbe5qp9QPu6nLg+K/mHD4LvpHlt4T/8Am/xhhu1Bqd0sB54x8iu+khVPhOTymEN1Cqd8sA5Yz8k9JBHhOTvDLg1APt1ItwZF8y75J6RbXwmf/V/hH9tpSak0LM39JKfffhHg0BRm8vTTwzDXrvPv/rZvaSihhGGKNkY4MaG3522qMzu9tMdKRtWIh7riYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCUEIJQEBAQEBAQEBAQEBAQQglBCCUBAQEBAQEBAQEEIJQEBB/9k=',
      name:'Dr. '+name,
      type:type,
      color:colors[Math.floor(Math.random()*8)]
    })
    setDoctorList(temp)
    setName('')
    setType('')
    dispatch({ type: 'CLOSE_MODAL', dimmer: 'blurring' })
  }

  const addPatient=function () {
    const temp=[...patientList]
    temp.push({
      name:patientName,
      disease:disease,
      duration:duration,
      image:image, 
    })
    setPatientList(temp)
    setPatientName('')
    setDisease('')
    setDuration('')
    setImage('')
    setSecondOpen(false)
    setFirstOpen(false)
  }
  return(
      <div> 
        <Grid  columns={4}  stackable >
          {doctorList.map(({image,name,type,color},index)=>{
            return(
              <Grid.Column>
                <Card style={{backgroundColor:color ,textAlign:'center', width:'230px' , height:'40vh'}}>
                  <Card.Content >
                    <Image
                      size='tiny'
                      src={image}
                      circular
                    />
                    <Card.Header style={{marginTop:'3%'}}>{name}</Card.Header>
                    <Card.Meta>
                          <span className='date'>{type}</span>
                    </Card.Meta>
                  
                    <div style={{display:'flex', justifyContent:'center',margin:'5% 0%'}}>
                        <Icon name='facebook f' size='large'/>
                        <Icon name='twitter' size='large'/>
                        <Icon name='instagram' size='large'/>
                    </div>
                    
                    <div style={{ position:'absolute',bottom:3, margin:'2% 12%'}}>
                      <Button basic 
                      size='tiny'
                       color='black'
                       onClick={() => setFirstOpen(true)}
                       >
                        Book Appointment
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
          })}  
        </Grid> 
         {/*Patient Modal  */}
         <Modal
            onClose={() => setFirstOpen(false)}
            onOpen={() => setFirstOpen(true)}
            open={firstOpen}
            size='small'
          >
            <Modal.Header>Patient Details</Modal.Header>
            <Modal.Content>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <Input placeholder='Enter Full Name' onChange={(e)=>setPatientName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                  <label>Disease</label>
                  <Input placeholder='Enter Disease Name' onChange={(e)=>setDisease(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                  <label>Disease Duration</label>
                  <select onChange={(e)=>setDuration(e.target.value)}>
                    <option></option>
                    <option>1 Day</option>
                    <option>2-5 Days</option>
                    <option>1 Week</option>
                    <option>2-3 Weeks</option>
                    <option>1 Month</option>
                  </select> 
                </Form.Field>
                <Form.Field>
                  <label>Image</label>
                  <Input placeholder='Enter Image' type='file' onChange={(e)=>setImage(e.target.value)}/>
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setSecondOpen(true)} basic color='green'>
                Proceed <Icon name='right chevron' />
              </Button>
            </Modal.Actions>

            <Modal
              onClose={() => setSecondOpen(false)}
              open={secondOpen}
              size= 'tiny'
            >
              <Modal.Header>Enter Payment Details</Modal.Header>
              <Modal.Content>
                <div className='payment' Button>
                  <a><Icon name='cc visa'  size='huge'  color='blue'/></a>
                  <a><Icon name='cc mastercard'  size='huge'  color='orange'/></a>
                  <a><Icon name='paypal card'  size='huge'  color='blue'/></a>
                  <a><Icon name='credit card outline'  size='huge'  color='red'/></a>
                </div>
                <Form>
                <Form.Field>
                  <label>Card Number</label>
                  <Input placeholder='1234 5567 2910 3456' size='tiny'/>
                </Form.Field>
                <Form.Field>
                  <label>Name on Card</label>
                  <Input placeholder='Jhon Doe' size='tiny'/>
                </Form.Field>
                <Form.Group widths='equal'>
                  <Form.Input
                    fluid
                    label='Expiry Date'
                    type='date'
                    size='tiny'
                  />
                   <Form.Input icon label='Security Code' placeholder='* * * *' size='tiny'>
                    <input type='password'/>
                    <Icon name='question circle' size='large' />
                  </Form.Input>
                </Form.Group>
                </Form>
              </Modal.Content>
              <Modal.Actions style={{textAlign:'center'}}>
                <Button
                  icon='check'
                  content='Confirm Appointment'
                  onClick={addPatient}
                  secondary basic
                />
              </Modal.Actions>
            </Modal>
          </Modal>
          
        {/* doctor modal */}
         <Modal
            dimmer={dimmer}
            open={open}
            onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
            size='mini'
          >
            <Modal.Header>Doctor Details</Modal.Header>
            <Modal.Content>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <Input placeholder='Enter Full Name' onChange={(e)=>setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                  <label>Type</label>
                  <Input placeholder='Enter Doctor Type' onChange={(e)=>setType(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                  <label>Image</label>
                  <Input  disabled  placeholder='https://www.miraldental.com/wp-content/uploads/2018/12/doctor-img2.png'/>
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions style={{textAlign:'center'}}>
              <Button basic color='black' size='small' onClick={addDetails}>
                Add Details
              </Button>
            </Modal.Actions>
          </Modal>  

          <BottomNavigation style={{backgroundColor:'transparent'}}>
            <BottomNavigationAction icon={
                   <Button secondary size='tiny'
                   onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}>
                      Add Doctor
                  </Button>} />
          </BottomNavigation>
      </div>
    )
}

export default Doctor
// const mapDispatchToProps=(dispatch)=>{
//   return{
//       setDoctor:(doctorList)=>dispatch(setDoctor(doctorList)) 
//   }
// }
// export default connect(null,mapDispatchToProps)(Doctor)