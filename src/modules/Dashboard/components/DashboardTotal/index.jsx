import Tooltip from '@mui/material/Tooltip';
import GroupIcon from '@mui/icons-material/Group';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AddIcon from '@mui/icons-material/Add';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WalletIcon from '@mui/icons-material/Wallet';
import './index.css';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import SendIcon from '@mui/icons-material/Send';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Divider from '@mui/material/Divider';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useState } from 'react';
import moment from 'moment';
// import circle from '../../../../../public/circle.svg';

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
];

const DashboardTotal = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    return (
        <>
            <div className='row dashboard-total'>
                <div className="grid-margin card-total">
                    <div className='bg-gradient-danger card-img'>
                        <div className="card-body">
                            <img className='img' src="https://zcart.incevio.cloud/images/circle.svg" alt="" />
                            <h4 className='font-weight-normal'>
                                Customers
                                <GroupIcon className='float-r' />
                            </h4>
                            <h2 className='title-h2'>22</h2>
                            <h6 className='title-text'>
                                <AddIcon sx={{ fontSize: 12 }} />
                                0 Customers in 30 days
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="grid-margin card-total">
                    <div className='bg-gradient-primary card-img'>
                        <div className="card-body">
                            <img className='img' src="https://zcart.incevio.cloud/images/circle.svg" alt="" />
                            <h4 className='font-weight-normal'>
                                Customers
                                <BarChartIcon className='float-r' />
                            </h4>
                            <h2 className='title-h2'>22</h2>
                            <h6 className='title-text'>
                                <AddIcon sx={{ fontSize: 12 }} />
                                0 Customers in 30 days
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="grid-margin card-total">
                    <div className='bg-gradient-success card-img'>
                        <div className="card-body">
                            <img className='img' src="https://zcart.incevio.cloud/images/circle.svg" alt="" />
                            <h4 className='font-weight-normal'>
                                Customers
                                <ShoppingCartIcon className='float-r' />
                            </h4>
                            <h2 className='title-h2'>22</h2>
                            <h6 className='title-text'>
                                <HourglassBottomIcon sx={{ fontSize: 12 }} />
                                0 Customers in 30 days
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="grid-margin card-total">
                    <div className='bg-gradient-danger card-img'>
                        <div className="card-body">
                            <img className='img' src="https://zcart.incevio.cloud/images/circle.svg" alt="" />
                            <h4 className='font-weight-normal'>
                                Customers
                                <WalletIcon className='float-r' />
                            </h4>
                            <h2 className='title-h2'>22</h2>
                            <h6 className='title-text'>
                                <HourglassBottomIcon sx={{ fontSize: 12 }} />
                                0 Customers in 30 days
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="item-box">
                    <div className="info-box bg-yellow">
                        <div className='info-box-icon'>
                            <DriveFileMoveIcon />
                        </div>
                        <div className='info-box-content'>
                            <span class="info-box-text">Pending verifications</span>
                            <span className='info-box-number'>
                                0
                                <Tooltip title="Take action" placement="left" arrow>
                                    <SendIcon sx={{ fontSize: 16, float: 'right' }} />
                                </Tooltip>
                            </span>
                            <div class="progress">
                                <div class="progress-bar bg-warning" ></div>
                            </div>
                            <span class="progress-description">
                                <HourglassBottomIcon sx={{ fontSize: 12 }} />
                                0 Pending verification need action
                            </span>
                        </div>
                    </div>
                </div>
                <div className="item-box">
                    <div className="info-box bg-aqua">
                        <div className='info-box-icon'>
                            <AutoGraphIcon />
                        </div>
                        <div className='info-box-content'>
                            <span class="info-box-text">Pending verifications</span>
                            <span className='info-box-number'>
                                0
                                <Tooltip title="Take action" placement="left" arrow>
                                    <SendIcon sx={{ fontSize: 16, float: 'right' }} />
                                </Tooltip>
                            </span>
                            <div class="progress">
                                <div class="progress-bar bg-warning" ></div>
                            </div>
                            <span class="progress-description">
                                <HourglassBottomIcon sx={{ fontSize: 12 }} />
                                0 Pending verification need action
                            </span>
                        </div>
                    </div>
                </div>
                <div className="item-box">
                    <div className="info-box  bg-red">
                        <div className='info-box-icon'>
                            <CampaignIcon />
                        </div>
                        <div className='info-box-content'>
                            <span class="info-box-text">Pending verifications</span>
                            <span className='info-box-number'>
                                0
                                <Tooltip title="Take action" placement="left" arrow>
                                    <SendIcon sx={{ fontSize: 16, float: 'right' }} />
                                </Tooltip>
                            </span>
                            <div class="progress">
                                <div class="progress-bar bg-warning"></div>
                            </div>
                            <span class="progress-description">
                                <ArrowDownwardIcon sx={{ fontSize: 12 }} />
                                100% Decrease in 30 days
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="wrapper-chart">
                    <div className="box">
                        <div className="chart-title">
                            <h3 className='box-title'>
                                <AttachMoneyIcon sx={{ fontSize: 16 }} />
                                Sales graph
                            </h3>
                        </div>
                        <Divider />
                        <div className='total-sale-graph'>
                            <div className="tab-container">
                                <div
                                    className={`tab-button ${activeTab === 0 ? 'active' : ''}`}
                                    onClick={() => handleTabClick(0)}
                                >
                                    This Week
                                </div>
                                <div
                                    className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
                                    onClick={() => handleTabClick(1)}
                                >
                                    This Month
                                </div>
                                <div
                                    className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
                                    onClick={() => handleTabClick(2)}
                                >
                                    This Year
                                </div>
                            </div>
                            <LineChart
                                sx={{ width: "100%" }}
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    },
                                ]}
                                width={1200}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ display: 'flex' }}>
                <div className="wrapper-little-chart-1">
                    <div className="box">
                        <div className="chart-title">
                            <h3 className='box-title'>
                                <AttachMoneyIcon sx={{ fontSize: 16 }} />
                                Sales graph
                            </h3>
                        </div>
                        <Divider />
                        <div className='total-sale-graph'>
                            <LineChart
                                sx={{ width: "100%" }}
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[
                                    {
                                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                                        area: true,
                                    },
                                ]}
                                width={600}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="wrapper-little-chart-2">
                    <div className="box">
                        <div className="chart-title">
                            <h3 className='box-title'>
                                <AttachMoneyIcon sx={{ fontSize: 16 }} />
                                Sales graph
                            </h3>
                        </div>
                        <Divider />
                        <div className='total-sale-graph'>
                            <PieChart
                                series={[
                                    {
                                        data,
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                height={300}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="row dashboard-ticket-section">
                <div className="col-md-6 box mg-f mg-r">
                    <div className='table-wrapper'>
                        <div className='box-header'>
                            <h3 class="box-title-table box-title">
                                Open tickets
                            </h3>
                        </div>
                        <div className="table">
                            <thead>
                                <tr style={{ display: 'flex' }}>
                                    <th className='d-a' style={{ width: '65%' }}>Subject</th>
                                    <th className='d-a' style={{ width: '15%' }}>Priority</th>
                                    <th className='d-a' style={{ width: '6%' }}>
                                        <ChatBubbleIcon sx={{ fontSize: '25px !important' }} />
                                    </th>
                                    <th className='d-a' style={{ width: '15%' }}>Last update</th>
                                </tr>
                            </thead>
                            <tbody className='w100-f box-body' style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '65%' }}>
                                        <span class="label label-outline"> General query </span>
                                        <p class="content-table">
                                            <a href="">Payment Method</a>
                                        </p>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <span class="label label-warning">High</span>
                                    </td>
                                    <td style={{ width: '6%' }}>
                                        <span class="label label-default">0</span>
                                    </td>
                                    <td style={{ width: '15%' }}>1 year ago</td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '65%' }}>
                                        <span class="label label-outline">  General query  </span>
                                        <p class="content-table">
                                            <a href="">Starter Support</a>
                                        </p>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <span class="label label-warning">High</span>
                                    </td>
                                    <td style={{ width: '6%' }}>
                                        <span class="label label-default">0</span>
                                    </td>
                                    <td style={{ width: '15%' }}>1 year ago</td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '65%' }}>
                                        <span class="label label-outline">   Merchant support  </span>
                                        <p class="content-table">
                                            <a href="">Delivery boy</a>
                                        </p>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <span class="label label-warning">High</span>
                                    </td>
                                    <td style={{ width: '6%' }}>
                                        <span class="label label-default">0</span>
                                    </td>
                                    <td style={{ width: '15%' }}>1 year ago</td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '65%' }}>
                                        <span class="label label-outline">General query</span>
                                        <p class="content-table">
                                            <a href="">Delivery boy</a>
                                        </p>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <span class="label label-warning">High</span>
                                    </td>
                                    <td style={{ width: '6%' }}>
                                        <span class="label label-default">0</span>
                                    </td>
                                    <td style={{ width: '15%' }}>1 year ago</td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '65%' }}>
                                        <span class="label label-outline">  Merchant support  </span>
                                        <p class="content-table">
                                            <a href="">Delivery boy</a>
                                        </p>
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        <span class="label label-primary">Normal</span>
                                    </td>
                                    <td style={{ width: '6%' }}>
                                        <span class="label label-default">0</span>
                                    </td>
                                    <td style={{ width: '15%' }}>1 year ago</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 box mg-f mg-r">
                    <div className='table-wrapper'>
                        <div className='box-header'>
                            <h3 class="box-title-table box-title">
                                Open tickets
                            </h3>
                        </div>
                        <div className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: '59%' }}>Subject</th>
                                    <th>
                                        <ChatBubbleIcon sx={{ fontSize: '25px !important' }} />
                                    </th>
                                    <th style={{ width: '35%' }}>Last update</th>
                                </tr>
                            </thead>
                            <tbody className='box-body' style={{ width: '100%', display: 'block' }}>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://www.gravatar.com/avatar/fdeef491281a73a51a0fd7dab03d9173?s=30&d=mm" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://www.gravatar.com/avatar/fdeef491281a73a51a0fd7dab03d9173?s=30&d=mm" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://www.gravatar.com/avatar/fdeef491281a73a51a0fd7dab03d9173?s=30&d=mm" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://www.gravatar.com/avatar/fdeef491281a73a51a0fd7dab03d9173?s=30&d=mm" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://www.gravatar.com/avatar/fdeef491281a73a51a0fd7dab03d9173?s=30&d=mm" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 box mg-f mg-r">
                    <div className='table-wrapper'>
                        <div className='box-header'>
                            <h3 class="box-title-table box-title">
                                Open tickets
                            </h3>
                        </div>
                        <div className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: '59%' }}>Subject</th>
                                    <th>
                                        <ChatBubbleIcon sx={{ fontSize: '25px !important' }} />
                                    </th>
                                    <th style={{ width: '35%' }}>Last update</th>
                                </tr>
                            </thead>
                            <tbody className='box-body' style={{ width: '100%', display: 'block' }}>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://zcart.incevio.cloud/image/images/63fde867797c3.webp?p=tiny" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://zcart.incevio.cloud/image/images/63fde8678b5a5.webp?p=tiny" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://zcart.incevio.cloud/image/images/651195a00e27e.webp?p=tiny" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://zcart.incevio.cloud/image/images/6512abd8ac573.webp?p=tiny" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                                <tr style={{ display: 'flex' }}>
                                    <td style={{ width: '59.1%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img className='d-block-r-50' src="https://zcart.incevio.cloud/image/images/65143ca2b3db7.webp?p=tiny" alt="" />
                                            <p class="content-table">
                                                <a href="">McCullough</a>
                                            </p>
                                        </div>
                                    </td>
                                    <td style={{ padding: '11px' }}>
                                        <span class="label label-outline">0</span>
                                    </td>
                                    <td style={{ width: '35%', paddingLeft: '20px', paddingTop: '13px' }}>
                                        <span>$3,449.00</span>
                                    </td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardTotal