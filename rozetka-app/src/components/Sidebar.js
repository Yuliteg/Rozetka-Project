import styled from 'styled-components';
import Filter from './Filter';
import PriceFilter from './filters/PriceFilter';

const Sidebar = ({ goods }) => {
  return (
    <>
      <Wrapper>
        <div className='input'>
          <Filter
            goods={goods} />
        </div>
      </Wrapper>
    </>
  )
}

export default Sidebar;

const Wrapper = styled.div`
  padding-left: 1rem;
  
  .input {
  word-break: break-all;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5rem;
  gap: 2rem;
  
  .input-name {
    color: #3e77aa;
    cursor: default;
      :hover {
     color: #ff7878;
   }
  }
  .checkbox {
    margin-right: 0.5rem;
   }
  }

    button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }

  .checkbox-group {
    width: 100%;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #e9e9e9;
  }

  .slider-range {
    width: 100%;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #e9e9e9;
  }

  .input-brand-search {
    width: 85%;
    margin-bottom: 1.3rem;
  }

  .input-brand-control {
    height: 30px;
  }
`