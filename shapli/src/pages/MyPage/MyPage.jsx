import React from "react";
import * as S from "./style";

export default function MyPage() {
  return (
    <S.Container>
      <S.ProfileSection>
        <S.Title>My Profile</S.Title>
        <S.InfoItem>
          <strong>ID:</strong> your_id_here
        </S.InfoItem>
        <S.InfoItem>
          <strong>Password:</strong> ********
        </S.InfoItem>
      </S.ProfileSection>

      <S.MusicSection>
        <S.Title>Shared Music</S.Title>
        <S.MusicList>
          {/* 예시 아이템 */}
          <S.MusicItem>Music 1</S.MusicItem>
          <S.MusicItem>Music 2</S.MusicItem>
          <S.MusicItem>Music 3</S.MusicItem>
        </S.MusicList>
      </S.MusicSection>

      <S.MusicSection>
        <S.Title>Liked Music</S.Title>
        <S.MusicList>
          {/* 예시 아이템 */}
          <S.MusicItem>Liked Music 1</S.MusicItem>
          <S.MusicItem>Liked Music 2</S.MusicItem>
          <S.MusicItem>Liked Music 3</S.MusicItem>
        </S.MusicList>
      </S.MusicSection>

      <S.CommentsSection>
        <S.Title>My Comments</S.Title>
        <S.CommentList>
          {/* 예시 아이템 */}
          <S.CommentItem>Comment 1</S.CommentItem>
          <S.CommentItem>Comment 2</S.CommentItem>
          <S.CommentItem>Comment 3</S.CommentItem>
        </S.CommentList>
      </S.CommentsSection>
    </S.Container>
  );
}
