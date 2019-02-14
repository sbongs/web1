# -*-coding: utf-8 -*-

import requests
import telegram
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

# akombot token
# 아콤알리미채널 id = '-1001165095133'
bot = telegram.Bot(token = '762836421:AAEi2GUl0AcIg_mbNHiAqJg4ftidZMHbCd0')

# ChromedriverPath = "/home/maengu/chromedriver"
ChromedriverPath = "C:/Users/SEO/VENV/chromedriver/chromedriver.exe"

chrome_options = webdriver.ChromeOptions()
"""
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--no-sandbox')
'''chrome_options.add_argument\
('user-agent=Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36')
'''
"""
Cdriver = webdriver.Chrome(executable_path=ChromedriverPath, chrome_options=chrome_options)

LOGIN_INFO = {
    'user_id' : 'ktseo41',
    'password' : 'tjqhgus11'
}

akomLoginUrl = 'http://comm.akom.org/bbs/login.php'
akomMarketUrl = 'http://comm.akom.org/bbs/board.php?bo_table=adv_job'

# 합성용도
akomMergeUrl = 'http://w.akom.org'


# 로그인
Cdriver.get(akomLoginUrl)

# 로그인창 iframe으로 전환
Cdriver.switch_to.frame('api_login_ifrm')


Cdriver.find_element_by_name('user_id').send_keys(LOGIN_INFO['user_id'])
Cdriver.find_element_by_name('user_password').send_keys(LOGIN_INFO['password'])
Cdriver.find_element_by_xpath('//*[@id="view"]/div/table/tbody/tr/td[2]/button').click()

time.sleep(6)


# 페이지 방문
Cdriver.get(akomMarketUrl)

# BeautifulSoup
pageSource = Cdriver.page_source

soup = BeautifulSoup(pageSource, 'html.parser')
form = soup.find(attrs={'name':'fboardlist'})
ul = form.find('ul', "list-body")
lis = ul.find_all('li', class_='list-item')
print(type(lis))
i = 1
for li in lis:
    title = li.find(class_="wr-subject").a.stripped_string
    if title is not None:
        print(title)
    else:
        for e in li.find(class_="wr-subject").a.stripped_strings:
            print(str(i) + e)
            i+=1
        print(type(li.find(class_="wr-subject").a.contents))
#trs = form.find_all('li.list-item')

"""
i = 1
titleList = []
urlList = []
locationList = []

for tr in trs:
    if tr.attrs:
        if 'align' in tr.attrs:
            if not 'bgcolor' in tr.attrs:
                if i == 4:
                    break
                titleA = tr.find('a')
                titleStr = tr.find('td', class_='mw_basic_list_subject').span.string
                inPageTitle = ""
                titleLocation = tr.find('nobr', class_='mw_basic_list_name').string
                if(titleLocation is None or titleLocation is "지역선택"):
                    titleLocation = "지역미상"
                if titleStr:
                    if '…' in titleStr:
                        Cdriver.get(akomMergeUrl+titleA['href'][2:])
                        Cdriver.implicitly_wait(2)
                        try:
                            Cdriver.find_element_by_xpath('//*[@id="mw_basic"]/table[4]/tbody/tr[2]/td')
                        except:
                            inPageTitle = Cdriver.find_element_by_xpath('//*[@id="mw_basic"]/table[3]/tbody/tr[2]/td').text
                            titleList.append(inPageTitle)
                            urlList.append(akomMergeUrl+titleA['href'][2:])
                            locationList.append(titleLocation)
                            i+=1
                        else:
                            inPageTitle = Cdriver.find_element_by_xpath('//*[@id="mw_basic"]/table[4]/tbody/tr[2]/td').text
                            titleList.append(inPageTitle)
                            urlList.append(akomMergeUrl+titleA['href'][2:])
                            locationList.append(titleLocation)
                            i+=1
                    else:
                        titleList.append(titleStr)
                        urlList.append(akomMergeUrl+titleA['href'][2:])
                        locationList.append(titleLocation)
                        i+=1


with open('/home/maengu/marketTitles.txt', 'r') as f_read:
    before = f_read.readline()

if not titleList[0] == before:
    with open('/home/maengu/marketTitles.txt', 'w+') as f_write:
        bot.sendMessage(chat_id='-1001165095133', text = titleList[0] + \
        ' ' + locationList[0] + '\n' + urlList[0])
        f_write.write(titleList[0])

Cdriver.quit()

# txt file에서 타이틀 비교
"""