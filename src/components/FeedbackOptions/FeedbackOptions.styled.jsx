import styled from '@emotion/styled';

// export const FeedBackBox = styled.div`
//   display: block;
// `;

export const FeedBackList = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 20px;
`;

export const Feed = styled.button`
  margin: 0 20px;
  width: 100px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  border-width: 0;
  :hover {
    background-color: ${p => {
      if (p.children === 'good') {
        return '#05fe26';
      } else if (p.children === 'neutral') {
        return '#d9d9d9';
      } else if (p.children === 'bad') {
        return '#f31515';
      }
    }};
    transform: scale(1.1);
    transition: transform 0.4s;
  }
  transition: background-color 0.4s;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
