const message = {
  NULL_VALUE: "필요한 값이 없습니다.",
  NOT_FOUND: "존재하지 않는 자원",
  BAD_REQUEST: "잘못된 요청",
  INTERNAL_SERVER_ERROR: "서버 내부 오류",

  // 유저 조회
  CREATED_USER_SUCCESS: "유저 생성 성공",
  READ_USER_SUCCESS: "유저 조회 성공",
  DELETE_USER_SUCCESS: "유저 삭제 성공",
  UPDATE_USER_SUCCESS: "유저 수정 성공",

  // 리뷰
  CREATE_REVIEW_SUCCESS: "리뷰 작성 성공",
  READ_REVIEW_SUCCESS: "리뷰 조회 성공",
  SEARCH_REVIEW_SUCCESS: "리뷰 검색 성공",

  // 영화
  CREATE_MOVIE_SUCCESS: "영화 생성 성공",
  READ_MOVIE_SUCCESS: "영화 조회 성공",
  READ_ALL_MOVIE_SUCCESS: "전체 영화 조회 성공",
  READ_ALL_MOVIE_FAIL: "전체 영화 조회 실패",
  DELETE_MOVIE_SUCCESS: "영화 삭제 성공",
  UPDATE_MOVIE_SUCCESS: "영화 수정 성공",
  CREATE_MOVIE_COMMENT_SUCCESS: "영화 댓글 작성 성공",
  SEARCH_MOVIE_SUCCESS: "영화 검색 성공",

  // jwt
  NULL_VALUE_TOKEN: "토큰이 없습니다.",
  INVALID_TOKEN: "만료된 토큰입니다.",
  DUPLICATED: "이미 존재하는 유저입니다.",
  FORBIDDEN: "Forbidden",
  INVALID_PASSWORD: "비밀번호 오류",
  SIGNIN_USER_SUCCESS: "로그인 성공",
};

export default message;
