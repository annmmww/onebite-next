import styles from "./page.module.css";

export default function Home() {
  // const secretKey = "qwer123"; // 이렇게 비밀키를 적어도 브라우저엔 전달조차 되지 않음.

  // 또한 홈 컴포넌트 안에서 직접 데이터를 불러오도록 설정도 가능
  // -> getServerSideProps 나 getStaticProps가 했던 역할을 홈 컴포넌트가 할 수 있게 설정 가능
  // 이렇듯 서버에서만 할 수 있는 보안에 민감한 작업이나 데이터 페칭 기능이 가능
  // 반대로 브라우저에서만 할 수 있는 일들은 컴포넌트 내부에서 수행 불가
  // ex) useEffect
  // 리액트 훅은 브라우저에서만 동작하기 때문

  return <div className={styles.page}>인덱스 페이지</div>;
}
