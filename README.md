# 250313JSM480DIE Paskaitų medžiaga

# Klavišų kombinacijos

    WIN                                 MAC             Veiksmas
    ctrl + c                            cmd + c         Kopijuoja turinį
    ctrl + v                            cmd + v         Įklijuoja kopijuotą turinį turinį
    ctrl + s                            cmd + s         Išsaugo failą
    ctrl + a                            cmd + a         Pasirenka visą tekstą
    ctrl + f                            cmd + f         Paieškos atidarymas
    ctrl + /                            cmd + /         Komentarų kūrimas
    shift + ctrl + rodykle i virsu                      Kopijuoja eilutę į viršūų
    shift + ctrl + rodykle i zemyn                      Kopijuoja eilutę į apačią

# Terminalo komandos (Windows)
    dir (ls) - Išvardina visus failus direktorijoje
    cd NORIMAS KELIAS - Pakeičia esamą direktoriją į nurodytą  
    
    Keliai būna absoliutūs:
    C:\Windows\System32

    Realityvūs
    .. - Reiškia direktoriją aukščiau nuo esamos
    . - Reiškia esamą direktoriją

    touch pavadinimas.txt - Sukuria failą pagal nurodytą pavadinimą

    rm pavadinimas.txt - Ištrina pasirinktą failą
    rm -rf direktorijos_pavadinimas - Ištrina direktoriją 
    
# Git komandos

    git clone REPOZITORIJOS_ADRESAS - Klonuoja pasirinktą repozitoriją

    git pull - Atnaujina repozitorijos turinį

    
# Git komandos kuriant naują repozitoriją

    git init - inicijuoją repozitoriją (sukuria .git direktoriją)

    git add FAILO_PAVADINIMAS - Failų pridėjimas prie komito

    git add . - Visų failų pridėjimas prie komito

    git commit -m "Zinutes tekstas" - Nurodoma komito žinutė

    git branch -M main - Pagrindinės repozitorijos atšakos sukūrimas

    git remote add origin REPOZITORIJOS_ADRESAS - Nurodome repozitorijos adresą

    git push -u origin main - Kėlimo iniciavimas

# Git komandos atnaujinant repozitoriją

    git add . - Nurodome failus kuriuos norėsime kelti

    git commit -m "Zinutes tekstas" - Nurodome komito zinute

    git push - Inicijuojame pakeitimus

# GIT atšakų (branches) kūrimas

    git branch PAVADINIMAS - atšakos sukūrimo iniciavimas

    git checkout PAVADINIMAS - aktyvios šakos keitimas

    git push -u origin PAVADINIMAS - pakeitimų perdavimas i github'ą

# GIT atšakų sujungimas

    git checkout BRANCHAS_I_KURI_NORIME_PERKELTI_DUOMENIS 

    git merge BRANCHAS_IS_KURIO_NORIME_PAIMTI_DUOMENIS

    git push