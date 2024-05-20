import styled from "styled-components";
import { useDynamicPagination } from "../hooks/useDynamicPagination";
import UniversityCard from "./funcComponents/UniversityCard";

export const ObserverBlock = styled.div`
    height: 50px;
    background-color: red;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const UniversityCardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

export const DynamicPagination = () => {
    const { universitiesData, loading, ref } = useDynamicPagination();

    return (
        <>
            <GridContainer>
                {universitiesData?.length > 0 &&
                    universitiesData.map((university, index) => (
                        <UniversityCardWrapper key={index}>
                            <UniversityCard data={university} />
                        </UniversityCardWrapper>
                    ))}
                {!loading && <ObserverBlock ref={ref} />}
            </GridContainer>
            {loading && "Loading..."}
        </>
    );
};

export default DynamicPagination;
