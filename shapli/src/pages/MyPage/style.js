import styled from "styled-components";
import { BaseButton } from "components";

export const ExampleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExampleButton = styled(BaseButton)`
  background-color: red;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: gray;
  `;

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ProfileSection = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const MusicSection = styled.div`
  margin-bottom: 40px;
`;

export const MusicList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MusicItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const CommentsSection = styled.div`
  margin-bottom: 40px;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CommentItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f0f0f0;
`;
