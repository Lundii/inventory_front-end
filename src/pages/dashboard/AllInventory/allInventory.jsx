import React, {useEffect, useMemo, useState, useCallback} from 'react';
import Modal from '../../../components/Modal';
import Loading from '../../../components/loading';
import NewInventory from './newInventory';
import TableRow from './tableRow';
import {useFetcher} from '../../../hooks';
import * as S from './styled';


const AllInventory = () => {

  const {request, data, isLoading, error} = useFetcher('GET');
  const [openModal, setOpenModal] = useState(false);
  const [paging, setPaging] = useState({
    currentPage: 1,
    totalPages: 1
  });
  const [query, setQuery]= useState(null);

  const handleCreateVehicle = () => {
    setOpenModal(true);
  };
  
  const handlePagination = (e) => {
    if(isLoading) return;
    if(e.keyCode === 13){
      return;
     } 
     const {value} = e.target;
     setPaging(prevState => ({...prevState, currentPage: value}));
     request(`http://localhost:9001/vehicles?query=${query || ''}&page=${value - 1}`);
  }
  const handleQueryChange = (e) => {
    if(e.keyCode === 13){
      request(`http://localhost:9001/vehicles?query=${query}`);
      return;
     } 
    const {value} = e.target;
    setQuery(value);
  }
  const reload = useCallback(() => {
    request('http://localhost:9001/vehicles')
  }, [])
  
  const closeModal = () => {
    setOpenModal(false);
    reload();
  };
  
  const rows = useMemo(() => {

    setPaging({
      currentPage: (data && data.currentPage + 1) || 1,
      totalPages: (data && data.totalPages) || 1,
    })
    return ((data && data.vehicles) || []).map((vehicle) => 
    <TableRow 
      id={vehicle.id}
      name={vehicle.name} 
      year={vehicle.manufacturedate} 
      model={vehicle.model} 
      color={vehicle.color }
      vin={vehicle.vin} 
      reload={reload}
    />);
  }, [data]);

  useEffect(() => {
    if(!data){
      request('http://localhost:9001/vehicles')
    }
  }, [data])

 return (
  <S.Wrapper>
  {openModal && (
    <Modal>
      <NewInventory closeModal={closeModal}/>
    </Modal>
  )}
    <S.TopContainer>
      <div className="container">
        <S.Search>
          <input 
            placeholder="Search Inventory"
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleQueryChange}
          />
        </S.Search>
        <S.Button>
          <input type="button" value="Add Inventory" onClick={handleCreateVehicle}/>
        </S.Button>
      </div>
      <S.Paging>
        <h4>Pages</h4>
        <input 
          value={paging.currentPage} 
          onChange={handlePagination} 
          onKeyDown={handlePagination}
          type="number"
          min="1"
          max={paging.totalPages}
        />
        <h4>{`of ${paging.totalPages}`}</h4>
      </S.Paging>
    </S.TopContainer>
    <div>
      <S.TableHeader>
        <h4>Name</h4>
        <h4>Year</h4>
        <h4>Model</h4>
        <h4>Color</h4>
        <h4>VIN</h4>
        <h4></h4>
      </S.TableHeader>
      <S.RowWrapper>
        {isLoading ? (
          <Loading />
        ): rows}
      </S.RowWrapper>
    </div>
  </S.Wrapper>
 )
}

export default AllInventory;
