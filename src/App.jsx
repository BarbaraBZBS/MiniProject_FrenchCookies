import './App.css';
import pic from './assets/mainpic.jpg';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faFullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add( faFullStar )
library.add( faEmptyStar )

const StyledMain = styled.main`
margin: 25px;
padding: 10px;
width: 95%;
display: flex;
flex-direction: column;
@media screen and (max-width: 680px) {
    margin: 25px 0;
    padding: 10px 0;
    width: 100%;
  }
`;

const StyledImg = styled.img`
object-fit: cover;
height: 350px;
width: 80%;
margin: auto;
`;

const StyledSection = styled.section`
width: 80%;
margin: auto;
`;

const StyledMainTitle = styled.h1`
font-size: 40px;
font-weight: 400;
margin: 15px 0 0 0;
@media screen and (max-width: 354px) {
    font-size: 35px;
    margin-bottom: 15px;
  }
`;

const StyledParag = styled.p`
margin: 0;
`;

const StyledTitle = styled.h2`
font-size: 30px;
font-weight: 400;
margin: 15px 0 10px 0;
border-bottom: solid 1px lightgrey;
`;

const StyledOverview = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 60px;
@media screen and (max-width: 680px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

const StyledSpan = styled.span`
font-size: 14px;
text-align: center;
@media screen and (max-width: 680px) {
    margin-bottom: 20px;
  }
`;

const StyledIcons = styled.div`
padding: 20px 12px 19px 10px;
margin: 10px 0 15px 0;
text-align: center;
`;

const StyledBubble = styled.div`
border: 1px solid lightgrey;
border-radius: 35px;
padding: 20px 12px 19px 10px;
margin: 10px 0 15px 0;
width: 30px;
text-align: center;
`;

const StyledInfo = styled.p`
font-size: 10px;
margin: 0
`;

const StyledPart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledTable = styled.table`
width: 100%;
text-align: center;
margin-bottom: 25px;
height: 250px;
border-spacing: 0;
@media screen and (max-width: 420px) {
    font-size: 14px;
  }
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;

const StyledTR = styled.tr`
&:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

const StyledTD = styled.td`
border-top: lightgrey solid 1px;
`;

const StyledTH = styled.th`
border-top: lightgrey solid 1px;
border-bottom: lightgrey solid 1px;
`;

const StyledLastSpan = styled.span`
font-size: 14px;
font-weight: 100;
`;

const StyledStrong = styled.strong`
font-size: 25px;
font-weight: 700;
padding: 10px;
`;


function App() {
    return <StyledMain>
        <StyledImg src={ pic } alt='food banner' />
        <StyledSection>
            <StyledMainTitle>French Cookies</StyledMainTitle>
            <StyledParag>
                Efficient aggregate maximize clicks-and-mortar
                infrastructures communities weblogs best-of-breeds
                blogospheres frictionless interfaces B2C.
            </StyledParag>
            <div>
                <StyledTitle>Overview</StyledTitle>
                <StyledOverview>
                    <StyledPart>
                        <StyledIcons>
                            <StyledInfo>
                                <FontAwesomeIcon icon={ faFullStar } />
                                <FontAwesomeIcon icon={ faFullStar } />
                                <FontAwesomeIcon icon={ faStarHalfStroke } />
                                <FontAwesomeIcon icon={ faEmptyStar } />
                                <FontAwesomeIcon icon={ faEmptyStar } />
                            </StyledInfo>
                        </StyledIcons>
                        <StyledSpan>Difficulty</StyledSpan>
                    </StyledPart>
                    <StyledPart>
                        <StyledBubble>
                            <StyledInfo>
                                €€
                            </StyledInfo>
                        </StyledBubble>
                        <StyledSpan>Cost</StyledSpan>
                    </StyledPart>
                    <StyledPart>
                        <StyledBubble>
                            <StyledInfo>
                                45 mn
                            </StyledInfo>
                        </StyledBubble>
                        <StyledSpan>Preparation <br />Time</StyledSpan>
                    </StyledPart>
                    <StyledPart>
                        <StyledBubble>
                            <StyledInfo>
                                0 mn
                            </StyledInfo>
                        </StyledBubble>
                        <StyledSpan>Cooking <br />Time</StyledSpan>
                    </StyledPart>
                    <StyledPart>
                        <StyledBubble>
                            <StyledInfo>
                                10 mn
                            </StyledInfo>
                        </StyledBubble>
                        <StyledSpan>Resting <br />Time</StyledSpan>
                    </StyledPart>
                </StyledOverview>
            </div>
            <div>
                <StyledTitle>Ingredients</StyledTitle>
                <p>Servings: <StyledStrong>-</StyledStrong> 4 <StyledStrong>+</StyledStrong></p>
                <StyledTable>
                    <tbody>
                        <StyledTR>
                            <StyledTH>#</StyledTH>
                            <StyledTH>Name</StyledTH>
                            <StyledTH>Quantity</StyledTH>
                            <StyledTH>Metric</StyledTH>
                        </StyledTR>
                        <StyledTR>
                            <StyledTD>1</StyledTD>
                            <StyledTD>Tomato</StyledTD>
                            <StyledTD>2</StyledTD>
                            <StyledTD>Piece</StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <StyledTD>2</StyledTD>
                            <StyledTD>Chocolate</StyledTD>
                            <StyledTD>300</StyledTD>
                            <StyledTD>Gram</StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <StyledTD>3</StyledTD>
                            <StyledTD>Flour</StyledTD>
                            <StyledTD>150</StyledTD>
                            <StyledTD>Gram</StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <StyledTD>3</StyledTD>
                            <StyledTD>Milk</StyledTD>
                            <StyledTD>25</StyledTD>
                            <StyledTD>Cl</StyledTD>
                        </StyledTR>
                    </tbody>
                </StyledTable>
                <StyledLastSpan>List of the recipe ingredients</StyledLastSpan>
            </div>
        </StyledSection>
    </StyledMain >
}

export default App;
