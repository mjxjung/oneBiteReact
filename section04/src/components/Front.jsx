import Portal from './Portal';
import Service from './Service';
import Link from './Link';
// .jsx 확장자 생략해도 ㄱㅊ

// component 이름은 대문자로

// 부모 component
function Front() {
  return (
    <>
      <Portal />
      <Service />
      <Link />
    </>
  )
}

export default Front
