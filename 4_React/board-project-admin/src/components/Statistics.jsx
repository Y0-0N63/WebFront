import React, { useEffect, useState }  from "react";
import { axiosApi } from "../api/axiosAPI";

export default function Statistics() {
  const [isLoading, setIsLoading] = useState(true);
  
  // 조회수가 가장 많은 게시글
  const [readCountData, setReadCountData] = useState(null);
  const getMaxReadCount = async() => {
    try {
      const resp = await axiosApi.get("/admin/maxReadCount");

      if (resp.status === 200) {
        // 상태에 세팅 (서버에서 body에 실어주는 응답 데이터)
        setReadCountData(resp.data);
      }
    } catch (error) {
      console.log("조회수가 가장 많은 게시글 조회 중 예외 발생 : ", error);
    }
  }
  
  // 좋아요가 가장 많은 게시글
  const [likeCountData, setLikeCountData] = useState(null);
  const getMaxLikeCount = async() => {
    try {
      const resp = await axiosApi.get("/admin/maxLikeCount");

      if(resp.status == 200) {
        setLikeCountData(resp.data);
      }
    } catch (error) {
      console.log("좋야요가 가장 많은 게시글 조회 중 예외 발생 : ", error);
    }
  }
  
  // 댓글이 가장 많은 게시글
  const getMaxCommentCount = () => {
    
  }

  

  // 컴포넌트가 처음 마운트될 때 1번 실행
  useEffect(() => {
    getMaxReadCount();
    getMaxLikeCount();
  }, []);

  // readCountData, likeCountData, commentCountData 상태에 변화 감지될 때마다 > useEffect 수행
  // isLoading 상태값을 false로 변경
  useEffect(() => {
    if(readCountData != null && likeCountData != null) {
      setIsLoading(false);
    }
  }, [readCountData, likeCountData]);

  // 삼항 연산자가 아니라 JS 문법으로 isLoading 값에 따른 출력 여부 결정
  if(isLoading) {
    return <h1>Loading</h1>
  } else {
    return (
      <div>
        <section className="statistics-section">
          <h2>가장 조회수 많은 게시글</h2>
          <p>게시판 종류 : {readCountData.boardName}</p>
          <p>게시글 번호/제목 : No.{readCountData.boardNo} / {readCountData.boardTitle}</p>
          <p>게시글 조회수 : {readCountData.readCount}</p>
          <p>작성자 닉네임 : {readCountData.memberNickname}</p>
        </section>

        <section className="statistics-section">
          <h2>가장 좋아요 많은 게시글</h2>
        </section>

        <section className="statistics-section">
          <h2>가장 댓글 많은 게시글</h2>
        </section>
      </div>
    );
  }
}
