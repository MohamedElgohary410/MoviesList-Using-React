import { styled } from 'styled-components'
const StyledButtons = styled.button`
background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #2575fc 0%, #6a11cb 100%);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: linear-gradient(90deg, #d3d3d3 0%, #a9a9a9 100%);
    cursor: not-allowed;
    box-shadow: none;
  }`
//=========================================================
const OutlineButton = styled.button`
background: transparent;
color: #6a11cb;
font-size: 1rem;
font-weight: bold;
padding: 10px 20px;
border: 2px solid #6a11cb;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  color: #fff;
  border-color: transparent;
  transform: translateY(-3px);
}

&:active {
  transform: translateY(1px);
}

&:disabled {
  border-color: #d3d3d3;
  color: #a9a9a9;
  cursor: not-allowed;
}
`;
//=========================================================
const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #feb47b, #ff7e5f);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background: linear-gradient(45deg, #d3d3d3, #a9a9a9);
    color: #999;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export { StyledButtons, OutlineButton, IconButton }