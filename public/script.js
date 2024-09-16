document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/tickers');
    const tickers = await response.json();

    if (tickers.length > 0) {
        const ticker = tickers[0]; // Assuming working with the first ticker
        console.log(ticker);
        
        let count = 1;
        const formatNumber = (num) => {
            return num.toLocaleString('en-IN'); // Format numbers according to Indian locale
        };

        const minPriceElem = document.querySelector('.info-item .info-card:nth-child(1) .info-value');
        const highPriceElem = document.querySelector('.info-item .info-card:nth-child(2) .info-value');
        const bestPriceElem = document.querySelector('.info-item .info-card.best-price .info-value');
        const oneDayPriceElem = document.querySelector('.info-item .info-card:nth-child(4) .info-value');
        const sevenDayPriceElem = document.querySelector('.info-item .info-card:nth-child(5) .info-value');

        if (minPriceElem && highPriceElem && bestPriceElem && oneDayPriceElem && sevenDayPriceElem) {
            const minPrice = parseFloat(ticker.low) || 0;
            const highPrice = parseFloat(ticker.high) || 0;
            const bestPrice = parseFloat(ticker.last) || 0;
            const oneDayPrice = parseFloat(ticker.Open_data) || 0;
            const sevenDayPrice = parseFloat(ticker.at7) || 0;  // Adjust if actual 7 Day price available

            const minHighPercentage = minPrice && highPrice ? ((highPrice - minPrice) / minPrice * 100).toFixed(2) : 'N/A';
            const oneDayPercentage = oneDayPrice ? ((bestPrice - oneDayPrice) / oneDayPrice * 100).toFixed(2) : 'N/A';
            const sevenDayPercentage = sevenDayPrice ? ((bestPrice - sevenDayPrice) / sevenDayPrice * 100).toFixed(2) : 'N/A';
            

            minPriceElem.innerHTML = `${minHighPercentage}%`;
            highPriceElem.innerHTML = `${formatNumber(highPrice)}`;
            bestPriceElem.innerHTML = `₹ ${formatNumber(bestPrice)}`;
            oneDayPriceElem.innerHTML = `${formatNumber(oneDayPercentage)}`;
            sevenDayPriceElem.innerHTML = `${formatNumber(sevenDayPercentage)}`;
        } else {
            console.error('Info elements not found.');
        }

        const tableBody = document.getElementById('ticker-table');
        tickers.forEach(ticker => {
            const { name, last, buy, sell, volume } = ticker;

            const lastPrice = parseFloat(last);
            const buyPrice = parseFloat(buy);
            const volumeAmount = parseFloat(volume);

            const difference = buyPrice !== 0 ? ((lastPrice - buyPrice) / buyPrice * 100).toFixed(2) : 0;
            const savings = ((lastPrice - buyPrice) * volumeAmount).toFixed(2);
            const differenceClass = difference < 0 ? 'negative' : 'positive';
            const savingsClass = savings < 0 ? 'negative' : 'positive';

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${count}</td>
                <td>${name}</td>
                <td>₹ ${formatNumber(lastPrice)}</td>
                <td>₹ ${buyPrice.toFixed(2)} / ₹ ${sell}</td>
                <td class="difference ${differenceClass}">${difference}%</td>
                <td class="savings ${savingsClass}">₹ ${formatNumber(savings)}</td>
            `;
            tableBody.appendChild(row);
            count++;
        });
    } else {
        console.error('No tickers available in the data.');
    }
});
