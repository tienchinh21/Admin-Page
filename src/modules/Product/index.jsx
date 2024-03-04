import './index.css';
import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';



const columns = [
    {
        field: 'id', headerName: 'ID', with: 200,
        renderCell: (params) => (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                {params.value}
            </div>
        ),
    },
    { field: 'name', headerName: 'Name', with: 200, },
    { field: 'type', headerName: 'Type', with: 200, },
    {
        field: 'categories',
        headerName: 'Categories',
        type: 'number',
        width: 90,
        renderCell: (params) => (
            <div style={{
                width: '20%',
                height: '55%',
                backgroundColor: params.value !== null ? 'rgb(0, 192, 239)' : '',
                color: params.value !== null ? '#fff' : '',
                padding: '8px',
                fontSize: '13px',
                boxSizing: 'border-box',
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {params.value}
            </div>
        ),
    },
    {
        field: 'entities',
        headerName: 'Entities',
        type: 'number',
        renderCell: (params) => (
            <div style={{
                width: '20%',
                height: '55%',
                backgroundColor: params.value !== null ? '#d2d6de' : '',
                color: params.value !== null ? '#fff' : '',
                padding: '8px',
                fontSize: '13px',
                boxSizing: 'border-box',
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {params.value}
            </div>
        ),
    },
    {
        field: 'options',
        headerName: 'Options',
        renderCell: (params) => (
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Tooltip title="Add">
                    <button className='btn-options'><AddIcon sx={{ fontSize: 13 }} /></button>
                </Tooltip>
                <Tooltip title="Edit">
                    <button className='btn-options' ><EditIcon sx={{ fontSize: 13 }} /></button>
                </Tooltip>
                <Tooltip title="Delete">
                    <button className='btn-options' ><DeleteIcon sx={{ fontSize: 13 }} /></button>
                </Tooltip>
            </div>
        )
    },
];

const rows = [
    { id: 1, type: 'Color/Pattern', name: 'Color', categories: 35, entities: 1 },
    { id: 2, type: 'Color/Pattern', name: 'Pattern', categories: 42, entities: 2 },
    { id: 3, type: 'Select', name: 'Size', categories: 45, entities: 3 },
    { id: 4, type: 'Select', name: 'Style', categories: 16, entities: 4 },
    { id: 5, type: 'Radio', name: 'Gender', categories: null, entities: 5 },
    { id: 6, type: 'Select', name: 'Format', categories: 150, entities: 6 },
];



const getRowClassName = () => 'custom-row';
const getRowHeight = () => 35;


const containerWidth = 1150;
const numColumns = columns.length;
const columnWidth = containerWidth / numColumns;

const updatedColumns = columns.map(column => ({
    ...column,
    width: columnWidth,
}));

function Popup(props) {
    const { show, onClose, children } = props;

    return (
        <>
            {show && (
                <div className={`popup-overlay ${show ? 'active' : ''}`} onClick={onClose}>
                    <div className={`popup-content ${show ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

const Product = () => {
    const [showAttributeValuePopup, setShowAttributeValuePopup] = useState(false);
    const [showAttributePopup, setShowAttributePopup] = useState(false);


    return (
        <>
            <div className='box'>
                <div className="box-header">
                    <h3 class="box-title">Attributes</h3>
                    <div className="box-tool">
                        <button className='btn btn-header mr10' onClick={() => setShowAttributeValuePopup(true)}>Add attribute value</button>
                        <button className='btn btn-header' onClick={() => setShowAttributePopup(true)}>Add attribute</button>

                        <Popup show={showAttributeValuePopup} onClose={() => setShowAttributeValuePopup(false)}>
                            <div className="popup-inner">
                                <div>
                                    <form method="POST" id="form" class="custom-form" >
                                        <input name="_token" type="hidden" />
                                        <div className='form-header'>
                                            <span>Form</span>
                                        </div>
                                        <Divider />
                                        <div className='form-body'>
                                            <div className='form-group'>
                                                <label>Attribute*</label>
                                                <select className='select-form'>
                                                    <option selected="selected" value="">Attribute</option>
                                                    <option value="">Color</option>
                                                    <option value="">Format</option>
                                                    <option value="">Gender</option>
                                                    <option value="">Pattern</option>
                                                    <option value="">Size</option>
                                                    <option value="">Style</option>
                                                </select>
                                            </div>
                                            <div className='row-form'>
                                                <div className='w-65'>
                                                    <label for="value">Attribute value*</label>
                                                    <input className='select-form-Gr big-input' placeholder="Attribute value" required="" name="value" type="text" id="value" />
                                                </div>
                                                <div>
                                                    <label for="order">List order</label>
                                                    <input className='select-form-Gr' placeholder="Viewing order" name="order" type="number" id="order" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-footer">
                                            <div className='btn-new'>
                                                <span className='btn-save'>SAVE</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </Popup>

                        <Popup show={showAttributePopup} onClose={() => setShowAttributePopup(false)}>
                            <div className="popup-inner">
                                <p>Content of attribute popup</p>
                            </div>
                        </Popup>
                    </div>
                </div>
                <div className="box-body">
                    <div className='btn-group mt20'>
                        <button className='btn-default'>
                            <span>Copy</span>
                        </button>
                        <button className='btn-default'>
                            <span>CSV</span>
                        </button>
                        <button className='btn-default'>
                            <span>Excel</span>
                        </button>
                        <button className='btn-default'>
                            <span>PDF</span>
                        </button>
                    </div>
                    <div className="btn-find mt20">
                        <button className='btn-default'>
                            <span>Copy</span>
                        </button>
                    </div>
                    <div style={{ height: 350, width: '100%', display: 'flex', paddingTop: 20 }}>
                        <DataGrid
                            rows={rows}
                            columns={updatedColumns}
                            getRowClassName={getRowClassName}
                            getRowHeight={getRowHeight}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
            <div className='box collapsed-box'>
                <div className="box-tilte">
                    <DeleteIcon sx={{ fontSize: 15 }} />
                    TRASH
                </div>
            </div>
        </>
    )
}

export default Product