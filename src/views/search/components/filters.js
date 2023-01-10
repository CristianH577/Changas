import { useState, useEffect } from "react";
import { Accordion, Dropdown, ListGroup } from "react-bootstrap";

import listOrder from '../../../json/list_order.json'
import listWant from '../../../json/list_want.json'
import listOcc from '../../../json/list_occ.json'
import listExp from '../../../json/list_exp.json'
import listDpt from '../../../json/list_dpt.json'
import listNgb from '../../../json/list_ngb.json'

import './filters.css'

function Filters(props) {
    const filters = ['order', 'want', 'occ', 'exp', 'department']
    const filtersLists = {
        order: listOrder,
        want: listWant,
        occ: listOcc,
        exp: listExp,
        department: listDpt,
        ngb: listNgb
    }
    const [filtersTitles, setFT] = useState({})
    useEffect(() => {
        setFT({
            order: filtersLists['order'][props.lang].title,
            want: filtersLists['want'][props.lang].title,
            occ: filtersLists['occ'][props.lang].title,
            exp: filtersLists['exp'][props.lang].title,
            department: filtersLists['department'][props.lang].title,
            ngb: filtersLists['ngb'][props.lang].title
        })
    // eslint-disable-next-line
    }, [])

    const handleFilter = (e) => {
        setKey('')
        const filter = e.target.dataset.filter
        const i = e.target.dataset.index
        const lang = props.lang
        const value = e.target.dataset.value
        var title = ''

        if(filter === 'department') filtersTitles['ngb'] = filtersLists['ngb'][props.lang].title

        title = filtersLists[filter][lang].names[i]
        if(filter === 'ngb') title = filtersLists[filter].values[filtersTitles.department][i]
        if(i === '0' || i === '') title = filtersLists[filter][props.lang].title

        setFT({
            ...filtersTitles, 
            [filter]: title
        })

        props.onChange(filter, value)
    }

    /* DROPS */
    const dropNgb =
    <Dropdown drop='end' onSelect={(eventKey, e) => handleFilter(e)} className='bg-transparent mb-1'>
        <Dropdown.Toggle variant={'secondary'} className='bg-gradient' >
        {filtersTitles['ngb']}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item data-value='' data-index='' data-filter={'ngb'}>
            {filtersLists['ngb'][props.lang].names[0]}
            </Dropdown.Item>

            {filtersLists['ngb'].values[filtersTitles.department] &&
                filtersLists['ngb'].values[filtersTitles.department].map((value, k) => 
                <Dropdown.Item key={k} data-value={value} data-index={k} data-filter={'ngb'}>
                    {value}
                </Dropdown.Item>
            )}
        </Dropdown.Menu>
    </Dropdown>

    const dropsFilters = <>
    {filters.map((element, i) => 
        <Dropdown key={i} drop='end' onSelect={(eventKey, e) => handleFilter(e)} className='bg-transparent mb-1'>
            <Dropdown.Toggle variant={''} className={'bg-gradient w-100 btn-purple'}>
            {filtersTitles[element]}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ color: 'black !important' }}>
                { filtersLists[element].values.map((value, k) => 
                    <Dropdown.Item key={k} eventKey={value} data-value={value} data-index={k} data-filter={element}>
                        {filtersLists[element][props.lang].names[k]}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )}
    {filtersLists['ngb'].values[filtersTitles.department] && dropNgb}
    </>

    /* ACCORDIONS */
    const accordionNgb = <>
    <Accordion.Item eventKey={'ngb'}>
        <Accordion.Header className='bg-info bg-gradient'>{filtersTitles['ngb']}</Accordion.Header>

        <Accordion.Body className='p-0'>
            <ListGroup className='rounded-0'>
            {filtersLists['ngb'].values[filtersTitles.department] &&
                filtersLists['ngb'].values[filtersTitles.department].map((value, k) => 
                <ListGroup.Item key={k} variant={'secondary'} action data-value={value} data-index={k} data-filter={'ngb'} onClick={handleFilter}>
                    {value}
                </ListGroup.Item>
                )
            }
            
            </ListGroup>
        </Accordion.Body>
    </Accordion.Item>
    </>

const [activeKey, setKey] = useState('')
    const accordionsFilters = <>
    <Accordion flush activeKey={activeKey} onSelect={(eventKey) => setKey(eventKey)}>
    {filters.map((element, i) => 
        <Accordion.Item key={i} eventKey={i}>
            <Accordion.Header>{filtersTitles[element]}</Accordion.Header>

            <Accordion.Body className='p-0'>
                <ListGroup className='rounded-0'>
                    { filtersLists[element].values.map((value, k) => 
                        <ListGroup.Item key={k} variant={'secondary'} action data-value={value} data-index={k} data-filter={element} onClick={(e) => handleFilter(e)}>
                            {filtersLists[element][props.lang].names[k]}
                        </ListGroup.Item>
                        )}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    )}
    {filtersLists['ngb'].values[filtersTitles.department] && accordionNgb}
    </Accordion>
    </>

    return(
        <>
        <div className={'d-none d-md-block h-100 p-3'}>
            {dropsFilters}
        </div>

        <Accordion className={'d-md-none shadow'} onSelect={() => setKey('')}>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='rounded-0' >Filtros</Accordion.Header>

                <Accordion.Body className={'p-0 ' + props.style[0]}>
                    {accordionsFilters}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );
}

export default Filters;